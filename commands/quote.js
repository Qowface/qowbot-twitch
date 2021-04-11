const quotes = require('../helpers/quotes.js');

module.exports = {
    name: 'quote',
    description: 'Display a quote (random if ID not specified).',
    execute(client, channel, args) {
        let quote = {};
        if (!args[0]) {
            quote = quotes.getRandomQuote();
        } else {
            quote = quotes.getQuote(parseInt(args[0]));
        }
        if (!quote) return;
        client.say(channel, `${quote.id}) ${quote.quote}`);
    }
};
