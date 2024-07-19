import { TextChannel } from 'discord.js';
import { cmd } from '@enderbot/types';

const send: cmd = {
	name: 'send',
	alias: [],
	run (_client, message, args) {
		if (!message.guild?.members.me?.permissions.has('ModerateMembers')) return message.reply({ content: 'no tengo permisos', allowedMentions: { repliedUser: false } });

		if (!message.member?.permissions.has('ModerateMembers')) return message.reply({ content: 'no tienes permisos', allowedMentions: { repliedUser: false } });

		const canal = message.mentions.channels.first();

		if (!canal) return message.channel.send('lo siento no hay canal');
		if (!message.guild.channels.cache.get(canal.id)) return message.reply('el canal no esta en este servidor');

		const texto = args.slice(1).join(' ');

		if (!texto) return message.channel.send(' no hay texto');

		message.delete();
		message.reply({ content: 'mensaje mandado', allowedMentions: {repliedUser: false} });
 
		if (canal instanceof TextChannel) return canal.send(texto);
		else return;
	}

};

export default send;
