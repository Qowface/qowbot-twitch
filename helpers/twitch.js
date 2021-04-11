const { ApiClient } = require('twitch');
const { ClientCredentialsAuthProvider } = require('twitch-auth');
const { twitch } = require('../config/config.json');

const authProvider = new ClientCredentialsAuthProvider(twitch.clientId, twitch.clientSecret);
const apiClient = new ApiClient({ authProvider });

async function getChannelDataByUserName(userName) {
    const user = await apiClient.helix.users.getUserByName(userName);
    if (!user) return;
    const userId = user._data.id;
    const channel = await apiClient.kraken.channels.getChannel(userId);
    return await channel._data;
}

module.exports = {
    getTwitch: getChannelDataByUserName
};
