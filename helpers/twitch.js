const { ApiClient } = require('@twurple/api');
const { ClientCredentialsAuthProvider } = require('@twurple/auth');
const { twitch } = require('../config/config.json');

const authProvider = new ClientCredentialsAuthProvider(twitch.clientId, twitch.clientSecret);
const apiClient = new ApiClient({ authProvider });

async function getChannelDataByUserName(userName) {
    const user = await apiClient.users.getUserByName(userName);
    if (!user) return;
    const userId = user.id;
    const channel = await apiClient.channels.getChannelInfo(userId);
    return await channel;
}

module.exports = {
    getTwitch: getChannelDataByUserName
};
