const { shoutout } = require('../config/commands.json');
const { shoutouts } = shoutout;

module.exports = {
    name: 'shoutout',
    aliases: ['s'],
    description: 'Shoutouts!',
    execute(client, channel, args) {
        if (args[0] in shoutouts) {
            client.say(channel, shoutouts[args[0]]);
        }
    }
};
