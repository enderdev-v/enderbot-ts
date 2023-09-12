import BadBots from '../../Schemas/BadBots';
import Bots from '../../utils/Bots.json';

const deleted = {
	name: 'channelDelete',
	async run (client, channel) {
		client.channels.cache
			.get('1049143528007159928')
			.send(`canal ${channel.name} ha sido eliminado`);

		const logs = await channel.guild.fetchAuditLogs({
			limit: 1,
			type: 'DELETE_CHANNEL'
		});

		const canal = logs.entries.first();

		const { executor } = canal;

		if (!canal) return;
		if (!executor.bot) return;
		if (Bots.includes(executor.id)) return;

		await channel.guild.members
			.ban(executor, { reason: 'Raid.' });

		const data = await BadBots.findOne({ guild: channel.guild.id });
		if (!data) {
			const newdata = new BadBots({
				Bots: [],
				guildId: channel.guild.id
			});
			return await newdata.save();
		}
		await BadBots.findOneAndUpdate(
			{ guild: channel.guild.id },
			{
				$push: {
					Bots: executor.id
				}
			}
		);
	}
};

export default deleted;
