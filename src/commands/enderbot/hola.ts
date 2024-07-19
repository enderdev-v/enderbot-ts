const hola = {
	name: 'hola',
	alias: [],

	run (_client, message) {
		message.channel.send(`hola ${message.author} musho gusto`);
	}
};

export default hola;
