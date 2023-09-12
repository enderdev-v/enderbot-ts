import { cmd } from '../../types/enderbot';

const ping: cmd = {
	name: 'ping',
	alias: [],

	run (client, message) {
		message.channel.send(`Pong! **${client.ws.ping}ms** `);
	}
};

export default ping;