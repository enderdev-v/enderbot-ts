import { cmd } from '../../types/enderbot';

const say: cmd = {
	name: 'say',
	alias: [],

	run (client, message, args) {
		const texto = args.join(' ');
		if (!texto) return message.channel.send(' no hay texto');

		if (texto.includes('@everyone') || texto.includes('@here')) {
			message.delete();
			return message.channel.send('everyone Bv');
		}
		message.delete();

		message.channel.send(texto);
	}

};

export default say;