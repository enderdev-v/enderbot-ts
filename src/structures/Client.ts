/* eslint-disable @typescript-eslint/no-var-requires */
import { cmd, enderbotConfigType } from '@enderbot/types';
import { Client, Collection, Options, GatewayIntentBits } from 'discord.js';
import fs from 'node:fs';
import path from 'path';
import { enderbotConfig } from '@enderbot/classes/Config';
import { Logger } from './classes/Logger';

export class enderbot extends Client {
	commands: Collection<cmd, string> = new Collection();
	config: enderbotConfigType = new enderbotConfig();
	logger: Logger = new Logger();
	constructor() {
		super({
			intents: [GatewayIntentBits.GuildMembers, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildPresences, GatewayIntentBits.GuildEmojisAndStickers, GatewayIntentBits.GuildModeration, GatewayIntentBits.GuildPresences, GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildMessageTyping, GatewayIntentBits.GuildMessageReactions],
			shards: 'auto',
			makeCache: Options.cacheWithLimits({
				...Options.DefaultMakeCacheSettings,
				ReactionManager: 0,
				GuildMemberManager: {
					maxSize: 20,
					keepOverLimit: member => member.id === this.user?.id,
				},
			}),
		});
		
	}
	
	start(): void {
		this.login(process.env.token);
	}

	loadEvents() {
		const events = fs.readdirSync(path.join('./src/events'));
		for (const folders of events) {
			const folder = fs.readdirSync(path.join('./src/events', folders));
			for (const file of folder) {
				const event = require(path.join('../events', folders, file));
				this.on(event.default.name, async (...args) => event.default.run(this, ...args));
			}
		}
		this.logger.info('Events Loaded');
	}

	loadCommands() {
		const commands = fs.readdirSync(path.join('./src/commands'));
		for (const folders of commands) {
			const folder = fs.readdirSync(path.join('./src/commands', folders));
			for (const file of folder) {
				const cmd = require(path.join('../commands', folders, file));
				this.commands.set(cmd.default.name, cmd.default);
			}
		}
		this.logger.info('Commands Loaded');
	}
}
