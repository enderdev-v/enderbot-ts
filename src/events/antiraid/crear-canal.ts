import { TextChannel } from 'discord.js';
import { DiscordEvent } from '../../types/enderbot';
import array from '../../utils/Bots.json';

const create: DiscordEvent = {
	name: 'channelCreate',
	async run(client, channel) {
		const canal = client.channels.cache.get('1049143528007159928') as TextChannel;
		canal.send(`canal ${channel.name} ha sido creado`);

		const logs = await channel.guild.fetchAuditLogs({
			limit: 1,
			type: 'CREATE_CHANNEL'
		});

		const log = logs.entries.first();

		const { executor } = log;

		if (!canal) return;
		if (!executor.bot) return;
		if (array.includes(executor.id)) return;
		
		await channel.guild.members
			.ban(executor, { reason: 'Raid.' });
	}
};

export default create;