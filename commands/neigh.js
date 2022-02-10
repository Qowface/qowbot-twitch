const counters = require('../helpers/counters.js');

module.exports = {
    name: 'neigh',
    description: 'Neigh!',
    execute(client, channel, args) {
        if (args[0] === 'count') {
            let count = counters.getCounter('neigh').count;
            client.say(channel, `Neigh count: ${count}`);
        } else {
            client.say(channel, 'Neigh!');
            counters.incrementCounter('neigh');
        }
    }
};
