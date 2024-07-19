import BadBots from '@enderbot/Schemas/BadBots';
import { DiscordEvent } from '@enderbot/types';
const Bots: DiscordEvent = {
	name: 'guildMemberAdd',
	async run(_client, member) {
		const data = await BadBots.findOne({ guild: member.guild.id });

		if (!data) return;

		if (data.bots.includes(member.id)) {
			await member.ban({ reason: 'Raid.' });
		}

	}
};

export default Bots;