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
        const greetChannel = member.guild.channels.get('639318834989498378');
        welcomeChannel.send(`<a:N1:657447252440252416><a:P1:657447252301840399>  **|  Novo membro: <@${member.user.id}>**`);
        greetChannel.send(`<a:N1:657447252440252416><a:P1:657447252301840399>  **|  Bem vindo <@${member.user.id}>! Leia as <#639319056343760918> e sinta-se em casa <a:pikachu_legal:644005135093202954>**`);

        return member.roles.add('653059521778024468');
    }

};
