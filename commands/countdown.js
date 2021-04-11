const { countdown } = require('../config/commands.json');
const { defaultCount, introText, zeroText } = countdown;

module.exports = {
    name: 'countdown',
    aliases: ['cd'],
    description: 'Countdown timer.',
    execute(client, channel, args) {
        if (introText) {
            client.say(channel, introText);
        }
        let count = args[0] || defaultCount;
        let interval = setInterval(() => {
            if (count > 0) {
                client.say(channel, `${count}`);
                count--;
            } else {
                client.say(channel, zeroText);
                clearInterval(interval);
            }
        }, 1000);
    }
};
