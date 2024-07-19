import { cmd } from '@enderbot/types';

const ball: cmd = {
	name: '8ball',
	alias: [],
	run (_client, message) {
		const Numero = ['si', 'no', 'tal vez', 'no se ', 'posiblemente', 'mentira'];
		const Aleatorio = Math.floor(Math.random() * (Numero.length));

		message.reply(`mi respuesta es es: ${Numero[Aleatorio]}`);
	}

};

export default ball;