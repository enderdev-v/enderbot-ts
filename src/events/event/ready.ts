import chalk from 'chalk';
import { DiscordEvent } from '../../types/enderbot';

const ready: DiscordEvent = {
	name: 'ready',
	run (client) {

		
		// Presence

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

		setInterval(() => {
			function presence () {
				client.user.setPresence({
					status: 'online',
					activities: [
						{
							name: activity[Math.floor(Math.random() * activity.length)],
							type: 'LISTENING'
						}
					]
				});
			}
			presence();
		}, 50000);

		console.log(chalk.italic.cyan('enderbot listo'));
	}
};

export default ready;