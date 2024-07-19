const message = {
	name: 'messageCreate',
	run (client, message) {
		

		if (message.channel.type === 'dm') return;
		if (message.author.bot) return;

		const prefix = 'e!';

		if (message.content.startsWith(prefix)) {
			const args = message.content.slice(prefix.length).trim().split(/ +/g);
			const command = args.shift().toLowerCase();

			const cmd = client.commands.find(cmd => cmd.name === command || cmd.alias.includes(command));

			if (cmd) {
				cmd.run(client, message, args);
			}
		}
	}
};

export default message;
