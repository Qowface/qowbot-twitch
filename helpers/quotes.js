const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('db/quotes.json');
const db = low(adapter);

db.defaults({ quotes: [], count: 0 }).write();

function addQuote(quote) {
    db.update('count', n => n + 1).write();
    let id = db.get('count').value();
    db.get('quotes').push({ id: id, quote: quote }).write();
    return getQuote(id);
}

function getRandomQuote() {
    let id = Math.floor(Math.random() * db.get('count').value() + 1);
    return getQuote(id);
}

function getQuote(id) {
    return db.get('quotes').find({ id: id }).value();
}

module.exports = {
    addQuote: addQuote,
    getRandomQuote: getRandomQuote,
    getQuote: getQuote
};
