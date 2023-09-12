const mention = {
	name: 'messageCreate',
	run (client, message) {
		if (message.content.match(`<@${client.user.id}>`)) { message.reply('hola este es mi prefix :D \n Prefix: e! o e?'); }
	}
};

export default mention;
