import { DiscordEvent } from '@enderbot/types';
import { ActivityType } from 'discord.js';

const ready: DiscordEvent = {
	name: 'ready',
	run (client) {

		const activity = [
			'Counting Stars',
			'Cloud 9',
			'I\'m Still Standing',
			'Run',
			'Blinding ligths',
			'Sunflower',
			'Wake me up',
			'Sunburst'
		];
		activity;
		function presence () {
			client.user?.setActivity({
				name: 'custom',
				type: ActivityType.Custom,
				state: 'Viendo videos de ender'
			});
		}
		presence();

		client.logger.enderbot('Ready');
	}
};

export default ready;