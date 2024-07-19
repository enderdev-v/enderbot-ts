const dm = {
	name: 'dm',
	alias: [],

	async run (_client, message, args) {
		const user = message.mentions.members.first();

		if (!user) return message.reply('no puedo expulsar a nadie mencionalo');

		const texto = args.slice(1).join(' ');

		if (!texto) return message.channel.send(' no hay texto');

		try {
			message.delete();
			user.send(texto);
		} catch (e) {
			message.channel.send(e);
		}
	}

};

export default dm;
