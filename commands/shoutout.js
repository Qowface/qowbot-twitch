const { shoutout } = require('../config/commands.json');
const { shoutouts } = shoutout;

module.exports = {
    name: 'shoutout',
    aliases: ['s', ...Object.keys(shoutouts)],
    description: 'Shoutouts!',
    execute(client, channel, args, commandName) {
        if (commandName in shoutouts) {
            client.say(channel, shoutouts[commandName]);
        } else if (args[0] in shoutouts) {
            client.say(channel, shoutouts[args[0]]);
        }
    }
};
