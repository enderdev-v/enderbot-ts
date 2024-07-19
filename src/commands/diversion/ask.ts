import { cmd } from '../../types/enderbot';
import Discord from 'discord.js';

const ask: cmd = {
	name: 'ask',
	alias: [],

	async  run (_client, message) {
		const embed = new Discord.EmbedBuilder()
			.setTitle(`${message.author.username}, esta pidiendo algo :3`)
			.setColor(0xff09f8)
			.setImage('https://media.discordapp.net/attachments/920113079180742687/923034031313014814/OIP.jpeg');

		message.channel.send({ embeds: [embed] });
	}

};

export default ask;