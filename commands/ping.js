module.exports = {
    name: 'ping',
    description: 'Ping!',
    execute(client, channel, args) {
        client.say(channel, 'Pong.');
    }
};
