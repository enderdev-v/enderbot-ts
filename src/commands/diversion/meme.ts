import { cmd } from '@enderbot/types';
import Discord from 'discord.js';

const meme: cmd = {
	name: 'meme',
	alias: [],

	async  run (_client, message) {
		const memes = [
			'https://media.discordapp.net/attachments/1033038093294522408/1033038169635037184/373ca555d1392429ad3b20601b491846.jpg',
			'https://media.discordapp.net/attachments/1033038093294522408/1033038169182048276/b088c091ed7a17f5d038de91b6f4ee09.jpg',
			'https://media.discordapp.net/attachments/1033038093294522408/1033038168808751165/OIP_6.jpg'
		];
		const aleatorio = Math.floor(Math.random() * (memes.length));

		const embed = new Discord.EmbedBuilder()
			.setTitle('Nuevo Meme')
			.setImage(memes[aleatorio])
			.setColor(0x04f6e6);

		message.channel.send({ embeds: [embed] });
	}

};

export default meme;