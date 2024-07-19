import { enderbot } from './structures/Client';
import dotenv from 'dotenv';
import fs from 'fs';
import mongo, { ConnectOptions } from 'mongoose';
import '@enderbot/utils/anticrash';
dotenv.config();
const client = new enderbot();

fs.stat('./src/structures/coconaut.jpeg', (err) => {
	if (err) {
		console.log('Fatal error: coco not found');
	} else {
		mongo.connect(process.env.MongoDB as string, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		} as ConnectOptions).then(() => {
			client.logger.check('MongoDB connection');
		}).catch((e: Error) => {
			client.logger.error(`Error: ${e.message}`);
		});

		client.loadEvents();
		client.loadCommands();
		client.start();
	}
});

export default client;