import { cmd } from '../../types/enderbot';

const random: cmd = {
	name: 'random',
	alias: [],

	run (client, message) {
		const Numero = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
		const Aleatorio = Math.floor(Math.random() * (Numero.length));

		message.reply(`tu numero es: ${Numero[Aleatorio]}`);
	}

};

export default random;