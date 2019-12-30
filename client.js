const { KlasaClient } = require('klasa');
const { token } = require('./ecosystem.conf.json');

KlasaClient.defaultUserSchema
    .add('reputationPoints', 'integer', {default: 0});

new KlasaClient({
    fetchAllMembers: false,
    prefix: ',',
    commandEditing: true,
    typing: true,
    readyMessage: (client) => `Successfully initialized. Ready to serve ${client.guilds.size} guilds.`
}).login(token);

