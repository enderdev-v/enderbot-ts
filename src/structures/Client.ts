/* eslint-disable @typescript-eslint/no-var-requires */
import chalk from 'chalk';
import { BitFieldResolvable, Client, Collection, Intents, IntentsString } from 'discord.js';
import mongo from 'mongoose';
import fs from 'node:fs';
import path from 'path';
export class enderbot extends Client {
	commands = new Collection();
	constructor() {
		super({ shards: 'auto', intents: Object.keys(Intents.FLAGS) as BitFieldResolvable<IntentsString, number> });
		
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
	}

	LoadDB() {
		mongo.connect(process.env.MongoDB, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		} as mongo.ConnectOptions).then(() => {
			console.log(chalk.bold.green`conectado correctamente a Mongo DB`);
		}).catch((e) => {
			console.log(chalk.italic.red`ocurrió un error al conectarse a MongoDB : ${e}`);

		});
	}
}
