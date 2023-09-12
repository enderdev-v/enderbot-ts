import { cmd } from '../../types/enderbot';

const revive: cmd = {
	name: 'revive',
	alias: [],

	run (client, message) {
		if (!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send('no tienes permisos');
		if (!message.guild.me.permissions.has('ADMINISTRATOR')) return message.channel.send('no tienes permisos');

		message.channel.send('@everyone revivan y les doy un pastel :3');
	}

};

export default revive;
