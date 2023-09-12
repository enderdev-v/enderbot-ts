
import { enderbot } from './structures/Client';
import chalk from 'chalk';
import dotenv from 'dotenv';
import mongo, { ConnectOptions }  from 'mongoose';
dotenv.config();
const client = new enderbot();

process.on('unhandledRejection', error => {
	console.error(error);
});

mongo.connect(process.env.MongoDB, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
} as ConnectOptions).then(() => {
	console.log(chalk.bold.green('MongoDB connection'));
}).catch((e: Error) => {
	console.log(chalk.bold.red('Error:'), e);
});

client.loadEvents();
client.loadCommands();
client.start();
