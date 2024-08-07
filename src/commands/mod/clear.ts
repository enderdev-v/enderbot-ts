import { TextChannel } from 'discord.js';
import { cmd } from '@enderbot/types';


const clear: cmd = {
	name: 'clear',
	alias: [],

	run (_client, message, args) {
		if (!message.guild?.members.me?.permissions.has('ModerateMembers')) return message.reply('No tengo los permisos!');

		if (!message.member?.permissions.has('ModerateMembers')) return message.reply('no tienes permisos');

		const cantidad = Number(args.join(' '));

		if (!cantidad) return message.channel.send('por facor escribeme una cantidad');

		if (cantidad >= 100) return message.channel.send('perdone pero esa cantidad excede mis limites escribe una menor que 100');

		if (isNaN(cantidad)) return message.channel.send('escribe una cantidad  en numeros');

		message.delete().then(() => {
			if (message.channel instanceof TextChannel) {
				message.channel.bulkDelete(cantidad, true);
			}
			message.channel.send(`vaya acabo de eliminar ${cantidad} mensajes :0`);
		});
	}

};

export default clear;