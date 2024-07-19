import Discord, { GuildMember } from 'discord.js';
import { cmd } from '@enderbot/types';

const avatar: cmd = {
	name: 'avatar',
	alias: [],

	run (_client, message) {
		const usuario = message.mentions.members?.first()|| message.member  as GuildMember;

		const embed = new Discord.EmbedBuilder()

			.setTitle(`Avatar de **${usuario.user.username}**`)
			.setImage(usuario.user.displayAvatarURL({ size: 1024, forceStatic: true, extension: 'png' }))
			.setFooter({ text: `avatar pedido por: ${message.author.username}` });

		message.channel.send({ embeds: [embed] });
	}

};

export default avatar;
