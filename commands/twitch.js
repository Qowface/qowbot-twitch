const twitch = require('../helpers/twitch.js');

module.exports = {
    name: 'twitch',
    aliases: ['t'],
    description: 'Twitch channel info.',
    execute(client, channel, args) {
        let name = args[0].replace('@', '');
        twitch.getTwitch(name).then(data => {
            if (!data) return;

            let name = data.name;
            let displayName = data.displayName;
            let game = data.gameName;

            client.say(channel, `${displayName} was last seen playing ${game} over at twitch.tv/${name}! Be sure to check out their channel and give them a follow!`);
        });
    }
};
