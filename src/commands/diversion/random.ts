import { cmd } from '@enderbot/types';

const random: cmd = {
	name: 'random',
	alias: [],

	run (_client, message) {
		const Numero = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
		const Aleatorio = Math.floor(Math.random() * (Numero.length));

		message.reply(`tu numero es: ${Numero[Aleatorio]}`);
	}

};

export default random;