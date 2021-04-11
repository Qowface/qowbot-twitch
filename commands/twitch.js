const twitch = require('../helpers/twitch.js');

module.exports = {
    name: 'twitch',
    aliases: ['t'],
    description: 'Twitch channel info.',
    execute(client, channel, args) {
        let name = args[0].replace('@', '');
        twitch.getTwitch(name).then(data => {
            if (!data) return;

            console.log(data);

            let displayName = data.display_name;
            let game = data.game;
            let url = data.url;

            client.say(channel, `${displayName} was last seen playing ${game} over at ${url}! Be sure to check our their channel and give them a follow!`);
        });
    }
};
