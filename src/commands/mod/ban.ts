import { cmd } from '../../types/enderbot';

const ban: cmd = {
	name: 'ban',
	alias: [],

	async run (client, message, args) {
		if (!message.guild.me.permissions.has('BAN_MEMBERS')) return message.reply('No tengo los permisos!');

		const user = message.mentions.members.first();

		if (!user) return message.reply('no puedo banear a nadie mencionalo');

		if (!message.member.permissions.has('BAN_MEMBERS')) return message.reply('no tienes permisos para usar este comando');

		if (message.member.roles.highest.comparePositionTo(user.roles.highest) <= 0) return message.reply('no puede banear a alguien igual o mayor rango que tu');

		if (user.user === message.author) return message.reply('no te puedes au banear');

		const banReason = args.join(' ');
		if (!banReason) return ('debes decir por que lo voy a banear');

		user.ban({ reason: banReason });

		message.channel.send(`el usuario ${user} fue muteado por  ${banReason}`);
	}

};

export default ban;