const { Command } = require('klasa');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            enabled: true,
            runIn: ['text'],
            cooldown: 180,
            permissionLevel: 0,
            description: '',
            extendedHelp: 'Dá um ponto de reputação para outro usuário.',
            usage: '<user:user>',
        });
    }

    async run(message, [user]) {
		if (user.id === message.author.id) return this.cantRep(message);
		const reppedUser = user.id;
		let currentPoints = user.settings.get('reputationPoints');
		// Update user's rep points
		await user.settings.update('reputationPoints', currentPoints + 1, { throwOnError: true } );
		const updatedPoints = user.settings.get('reputationPoints');

		const response = new MessageEmbed()
		.setColor('#13ff00')
		.setDescription(`**${message.member.displayName}** deu 1 ponto de reputação para <@${reppedUser}>!\n<@${reppedUser}> agora tem **${updatedPoints > 1 ? `${updatedPoints} pontos.` : `${updatedPoints} ponto.`}**`)
		.setFooter('Para ver o ranking de pontos neste servidor, digite loud lb.');

		return message.send(response);
    }

    cantRep(message) {
		return message.channel.send(`:warning:  **|  Oops, você não pode dar pontos de reputação para si mesmo! Tente novamente daqui em ${this.cooldown} segundos**`);
	}
};
