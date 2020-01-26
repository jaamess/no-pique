const { Event } = require('klasa');
module.exports = class extends Event {

    constructor(...args) {
        super(...args, {
            name: 'guildMemberUpdate',
            enabled: true,
            once: false
        });
    }

    async run(oldMember, newMember) {
        const annoucementChannel = newMember.guild.channels.get('639318834989498378');
        if (!oldMember.premiumSinceTimestamp && newMember.premiumSinceTimestamp) {
            if (newMember.roles.has('653366145981612032')) annoucementChannel.send(`<a:boosternopique:671098270210326537>  |  **<@${newMember.user.id}> acabou de impulsionar o servidor!**`);
        }
    }
};
