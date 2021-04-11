const { eightball } = require('../config/commands.json');
const responses = eightball.responses;

module.exports = {
    name: 'eightball',
    aliases: ['8ball'],
    description: 'Magic 8 ball!',
    execute(client, channel, args) {
        let response = responses[Math.floor(Math.random() * responses.length)];
        client.say(channel, response);
    }
};
