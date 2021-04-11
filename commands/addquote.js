const quotes = require('../helpers/quotes.js');

module.exports = {
    name: 'addquote',
    description: 'Add a new quote.',
    execute(client, channel, args) {
        let quote = quotes.addQuote(args.join(' '));
        client.say(channel, `Added quote #${quote.id}`);
    }
};
