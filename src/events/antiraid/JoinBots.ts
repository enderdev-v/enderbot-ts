import BadBots from '../../Schemas/BadBots';
import { DiscordEvent } from '../../types/enderbot';
const Bots: DiscordEvent = {
	name: 'GuildMemberAdd',
	async run(client, member) {
		const data = await BadBots.findOne({ guild: member.guild.id });

		if (!data) return;

		if (data.bots.includes(member.id)) {
			await member.ban({ reason: 'Raid.' });
		}

	}
};

export default Bots;