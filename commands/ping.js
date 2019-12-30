const { Command } = require('klasa');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            name: 'ping',
            enabled: true,
            runIn: ['text', 'dm'],
            quotedStringSupport: false,
            extendedHelp: 'Não há ajuda disponível para este comando'
        });
    }

    async run(message) {
        const ping = Math.round(this.client.ping);
        const pingResponses = {
            low: 'Tudo ok por aqui! <a:pikachu_legal:644005135093202954>',
            medium: 'Um pouco acima do normal, mas nada demais.',
            high: 'Hmm... algo de errado não está certo. <:supermannp:659919793201086465>'
        }
        
        response = `:ping_pong:  **|  Ping: ${ping}. ${ping <= 200 ? pingResponses.low : pingResponses.high}**`;

        return message.channel.send(response);
    }

};