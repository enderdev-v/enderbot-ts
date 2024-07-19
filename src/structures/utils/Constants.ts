import client from '../../index';
import { CacheFactory, Options, SweeperOptions } from 'discord.js';


export const endkachuCache: CacheFactory = Options.cacheWithLimits({
	...Options.DefaultMakeCacheSettings,
	ReactionManager: 0,
	GuildMemberManager: {
		maxSize: 20,
		keepOverLimit: (member) => member.id === client.user?.id,
	},
});

export const endkachuSweeper: SweeperOptions = {
	...Options.DefaultSweeperSettings,
	messages: {
		interval: 3600,
		lifetime: 1800,
	}
};