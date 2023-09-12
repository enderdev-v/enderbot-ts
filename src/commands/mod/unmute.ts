import { cmd } from '../../types/enderbot';

const unmute: cmd = {
	name: 'unmute',
	alias: [],

	async run (client, message) {
		if (!message.guild.me.permissions.has('MODERATE_MEMBERS')) return message.reply('No tengo los permisos!');

		const user = message.mentions.members.first();

		if (!user) return message.reply('no puedo mutear a nadie mencionalo');

		if (!user.isCommunicationDisabled()) return message.reply('el usuario ya esta desmuteado');

		if (!message.member.permissions.has('MODERATE_MEMBERS')) return message.reply('no tienes permisos para usar este comando');

		if (user.user === message.author) return message.reply('no te puedes desmutear a ti mismo');

		await user.timeout(null);

		message.channel.send(`el usuario ${user} fue desmuteado `);
	}

};

export default unmute;