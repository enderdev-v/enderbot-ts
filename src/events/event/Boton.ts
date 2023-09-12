import { Modal, TextInputComponent, MessageActionRow, ModalActionRowComponent } from 'discord.js';
const boton = {
	name: 'interactionCreate',
	async run (client, int) {
		if (int.isButton()) {
			if (int.customId === 'Staff') {
				const staff = new Modal()
					.setTitle('Apply para staff')
					.setCustomId('apply');

				const option = new TextInputComponent()
					.setCustomId('A')
					.setLabel('del 1 al 10 que tan maduro te consideras')
					.setStyle('PARAGRAPH')
					.setPlaceholder('1-10')
					.setRequired(true);

				const option2 = new TextInputComponent()
					.setCustomId('B')
					.setLabel('Por que quieres ser staff')
					.setStyle('PARAGRAPH')
					.setPlaceholder('¿Por que?')
					.setRequired(true);

				const row = new MessageActionRow<ModalActionRowComponent>()
					.addComponents(option);

				const row2 = new MessageActionRow<ModalActionRowComponent>()
					.addComponents(option2);

				staff.addComponents(row, row2);

				await int.showModal(staff);
			}
		}
	}
};

export default boton;