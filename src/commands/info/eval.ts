import { EmbedBuilder } from 'discord.js';
import { cmd } from '@enderbot/types';

const info: cmd = {
	name: 'eval',
	alias: [],

	run(client, message) {
		const embed = new EmbedBuilder()
			.setTitle('Informacion de enderbot')
			.setThumbnail(client.user?.displayAvatarURL() as string)
			.setColor(0x1afc30)
			.setDescription('```Hola buenas soy enderbot un bot multifuncion que vino a este servidor y que fue endercrack esta es mi info```')
			.addFields([
				{
					name: 'Prefixes',
					value: 'e! y e?'
				},
				{
					name: 'Creador',
					value: '[endercrack](https://www.youtube.com/@endercrackyt)'
				}
			])
			.setImage('https://th.bing.com/th/id/OIP.499jcnDKhHjqH7MfJrPgCQHaEK?w=295&h=180&c=7&r=0&o=5&pid=1.7');
		message.channel.send({ embeds: [embed] });
	}

};

export default info;