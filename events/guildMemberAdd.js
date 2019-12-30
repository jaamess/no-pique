const { Event } = require('klasa');

module.exports = class extends Event {

    constructor(...args) {
        super(...args, {
            name: 'guildMemberAdd',
            enabled: true,
            once: false
        });
    }

    async run(member) {
        console.log
        const welcomeChannel = member.guild.channels.get('639324481227194377');
        welcomeChannel.send(`<a:N1:657447252440252416><a:P1:657447252301840399>  **|  Novo membro: ${member.displayName}.`);
        
        return member.roles.add('653059521778024468');
    }

};
