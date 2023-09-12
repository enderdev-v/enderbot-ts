const antispam = {
	name: 'messageCreate',
	async run (client, msg) {
		const users = ['955175950314799254', '780277567537414165', '862905211001503774', '282286160494067712'];
		const channels = ['954735265988104193', '901239098025574400', '1112920459562995782'];
		try {
			if (users.includes(msg.author.id)) return;
			if (channels.includes(msg.author.id)) return;
			const link = /(https?:\/\/)?(www\.)?(discord\.(gg|io|me|li)|discordapp\.com\/invite)\/.+[a-z]/g;

			if (link.test(msg.content)) {
				await msg.delete();
				msg.channel.send('Hola por favor no mandes links').then(m => {
					setTimeout(async () => {
						await m.delete();
					}, 4000);
				});
			}
			if (msg.content.match('.destroy')) return msg.author.ban();
			if (msg.content.match('@everyone')) return msg.author.ban();
		} catch (error) {
			console.log(error);
		}
	}
};
export default antispam;
