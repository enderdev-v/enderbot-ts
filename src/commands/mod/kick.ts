import { cmd } from '@enderbot/types';

const kick: cmd = {
	name: 'kick',
	alias: [],

	async run (_client, message, args) {
		if (!message.guild?.members.me?.permissions.has('KickMembers')) return message.reply('No tengo los permisos!');

		const user = message.mentions.members?.first();

		if (!user) return message.reply('no puedo expulsar a nadie mencionalo');

		if (!message.member?.permissions.has('KickMembers')) return message.reply('no tienes permisos para usar este comando');

		if (message.member?.roles.highest.comparePositionTo(user.roles.highest) <= 0) return message.reply('no puede expulsar a alguien igual o mayor rango que tu');

		if (user.user === message.author) return message.reply('no te puedes autoexpulsarte');

		const kickReason = args.join(' ');
		if (!kickReason) return ('debes decir por que lo voy a banear');

		user.kick(kickReason);

		message.channel.send(`el usuario ${user} fue expulsado por ${kickReason}`);
	}

};

export default kick;