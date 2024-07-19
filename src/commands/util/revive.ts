import { cmd } from '@enderbot/types';

const revive: cmd = {
	name: 'revive',
	alias: [],

	run (_client, message) {
		if (!message.member?.permissions.has('Administrator')) return message.channel.send('no tienes permisos');
		if (!message.guild?.members.me?.permissions.has('Administrator')) return message.channel.send('no tienes permisos');

		message.channel.send('@everyone revivan y les doy un pastel :3');
	}

};

export default revive;
