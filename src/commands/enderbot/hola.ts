const hola = {
	name: 'hola',
	alias: [],

	run (client, message) {
		message.channel.send(`hola ${message.author} musho gusto`);
	}
};

export default hola;
