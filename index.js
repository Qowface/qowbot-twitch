const fs = require('fs');
const tmi = require('tmi.js');
const config = require('./config/config.json');

const commands = new Map();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    commands.set(command.name, command);
    if ('aliases' in command) {
        command.aliases.forEach(alias => {
            commands.set(alias, command);
        });
    }
}

const client = new tmi.Client({
    options: { debug: true },
    connection: {
        secure: true,
        reconnect: true
    },
    identity: {
        username: config.tmi.username,
        password: config.tmi.password
    },
    channels: config.tmi.channels
});
client.connect();

client.on('message', (channel, tags, message, self) => {
    if (!message.startsWith(config.prefix) || self) return;

    const args = message.slice(config.prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    const command = commands.get(commandName);
    if (!command) return;

    try {
        command.execute(client, channel, args, commandName);
    } catch (error) {
        console.error(error);
    }
});
