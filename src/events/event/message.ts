const message = {
	name: 'messageCreate',
	run (client, message) {
		function Troll () {
			const num = Math.floor(Math.random() * 100);
			const xd = Math.floor(Math.random() * 100);

			if (xd === num) {
				const pranks = ['el de arriba es feo', 'el de abajo no tendra novia', `el que me uso no tendra novia \n me uso ${message.author.tag}`];
				const random = Math.floor(Math.random() * (pranks.length));
				return message.channel.send(pranks[random]);
			}
		}

		if (message.channel.type === 'dm') return;
		if (message.author.bot) return;

		const prefix = 'e!' || 'e?';

		if (message.content.startsWith(prefix)) {
			const args = message.content.slice(prefix.length).trim().split(/ +/g);
			const command = args.shift().toLowerCase();

			const cmd = client.commands.find(cmd => cmd.name === command || cmd.alias.includes(command));

			if (cmd) {
				cmd.run(client, message, args);
			}
			Troll();
		}
	}
};

export default message;
