import Discord, { GuildMember } from 'discord.js';
import { cmd } from '../../types/enderbot';

const avatar: cmd = {
	name: 'avatar',
	alias: [],

	run (client, message) {
		const usuario = message.mentions.members?.first()|| message.member  as GuildMember;

		const embed = new Discord.MessageEmbed()

			.setTitle(`Avatar de **${usuario.user.username}**`)
			.setImage(usuario.user.displayAvatarURL({ size: 1024, dynamic: true, format: 'png' }))
			.setFooter({ text: `avatar pedido por: ${message.author.username}` });

		message.channel.send({ embeds: [embed] });
	}

};

export default avatar;
