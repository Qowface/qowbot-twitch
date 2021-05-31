const counters = require('../helpers/counters.js');

module.exports = {
    name: 'moo',
    description: 'Moo!',
    execute(client, channel, args) {
        if (args[0] === 'count') {
            let count = counters.getCounter('moo').count;
            client.say(channel, `Moo count: ${count}`);
        } else {
            client.say(channel, 'Moo!');
            counters.incrementCounter('moo');
        }
    }
};
