import { TextChannel } from 'discord.js';
import { DiscordEvent } from '../../types/enderbot';

const modal: DiscordEvent = {
	name: 'interactionCreate',
	async run (client, int) {
		const canal = client.channels.cache.get('964015365472518185') as TextChannel;
		if (int.isModalSubmit()) {
			if (int.customId === 'apply') {
				const A = int.fields.getTextInputValue('A');
				const B = int.fields.getTextInputValue('B');
				int.reply('Hola tu apply fue enviada');
				canal.send(`apply hecha por ${int.user.tag} \n Madurez: ${A} Por que: ${B}`);
			}
		}
	}
};

export default modal;