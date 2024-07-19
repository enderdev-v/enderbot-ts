// import { Guild, GuildMember } from 'discord.js';
import { cmd } from '@enderbot/types';
import ms from 'ms';

const mute: cmd = {
	name: 'mute',
	alias: [],

	async run(_client, message, args) {
		if (!message.guild?.members.me?.permissions.has('MuteMembers')) return message.reply('No tengo los permisos!');

		const user = message.mentions.members?.first();

		if (!user) return message.reply('no puedo mutear a nadie mencionalo');


		if (!message.member?.permissions.has('MuteMembers')) return message.reply('no tienes permisos para usar este comando');

		if (message.member.roles.highest.comparePositionTo(user.roles.highest) <= 0) return message.reply('no puede mutear a alguien igual o mayor rango que tu');

		if (user.user === message.author) return message.reply('no te puedes au kickear');

		const tiempo = args[1];

		if (!tiempo) return message.reply('por cuanto tiempo dimelo');

		const time = ms(tiempo);
		const muteReason = args[2];
		if (!muteReason) return ('debes decir por que lo voy a mutear');
		if (user?.isCommunicationDisabled()) return message.reply('el usuario ya esta muteado');
		
		user.timeout(time, muteReason).catch((e) => {
			console.log(e);
		});
		message.channel.send(`el usuario ${user} fue muteado por ${tiempo} con la razon de ${muteReason}`);


	}

};

export default mute;