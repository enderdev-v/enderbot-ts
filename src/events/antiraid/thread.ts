import { TextChannel } from 'discord.js';
import { DiscordEvent } from '../../types/enderbot';
const links = {
	link: [
		'https',
		'discord.gg',
		'dsc.gg',
		'www'
	]
};
const thread: DiscordEvent = {
	name: 'threadCreate', 
	async run(client, thread) {
		const canal = client.channels.cache.get('1049143528007159928') as TextChannel;

		canal.send(`thread creado como ${thread.name} en ${thread.guild.name}`);
		if (links.link.includes(thread.name)) {
			thread.delete();
			canal.send('thread con links eliminado'); 
      
		}
	}
};

export default thread;