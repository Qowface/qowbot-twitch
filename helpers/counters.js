const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('db/counters.json');
const db = low(adapter);

db.defaults({ counters: [] }).write();

function incrementCounter(counter) {
    let counters = db.get('counters');
    let search = counters.find({ id: counter });

    if (!search.value()) {
        counters.push({ id: counter, count: 1 }).write();
    } else {
        search.update('count', n => n + 1).write();
    }

    return getCounter(counter);
}

function getCounter(counter) {
    return db.get('counters').find({ id: counter }).value();
}

module.exports = {
    incrementCounter: incrementCounter,
    getCounter: getCounter
};
