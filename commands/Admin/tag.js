const { Command } = require('klasa');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            enabled: true,
            runIn: ['text'],
            requiredPermissions: ['MANAGE_ROLES'],
            permissionLevel: 5,
            description: 'Comando para setar tags em membros.',
            extendedHelp: 'Não há mais ajuda disponível para este comando.',
            usage: '<member:member> <role:role>',
            usageDelim: ' ',
        });
    }

    async run(message, [member, role]) {
        const 
    }

};
