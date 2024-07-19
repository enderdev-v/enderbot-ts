
import { LoggerColor, LoggerLevel } from '@enderbot/types';
import chalk from 'chalk';

export class Logger {
	private memoryUsage() {
		const memory: NodeJS.MemoryUsage = process.memoryUsage();
		const gigaBytes = memory.rss / 1024 ** 3;
		if (gigaBytes >= 1) return `[RAM: ${gigaBytes.toFixed(3)} GB]`;

		const megaBytes = memory.rss / 1024 ** 2;
		if (megaBytes >= 1) return `[RAM: ${megaBytes.toFixed(2)} MB]`;

		const kiloBytes = memory.rss / 1024;
		if (kiloBytes >= 1) return `[RAM: ${kiloBytes.toFixed(2)} KB]`;

		return `[RAM: ${memory.rss.toFixed(2)} B]`;
	}
	private getColor(level: number) {
		if (level === LoggerLevel.infoLogger) {
			return LoggerColor.infoLogger;
		} else if (level === LoggerLevel.warnLogger) { 
			return LoggerColor.warnLogger;
		} else if (level === LoggerLevel.debugLogger) {
			return LoggerColor.debugLogger;
		} else if (level === LoggerLevel.errorLogger) {
			return LoggerColor.errorLogger;
		} else if (level === LoggerLevel.checkLogger) {
			return LoggerColor.checkLogger;
		} else if (level === LoggerLevel.enderbotLogger) {
			return LoggerColor.enderbotLogger;
		}
	}
	private log(level: LoggerLevel, ...args: string[] | number[]) {
		const name = ['[ INFO ]', '[ WARN ]', '[ ERROR ]', '[ DEBUG ]', '[ CHECK ]','[ enderbot ]'];
		const memoryData = this.memoryUsage();
		const color = this.getColor(level) as string;
		
		const log = [
			chalk.italic(`${memoryData}`),
			chalk.bold.hex(color)(`${name[level]}`),
			...args,
		];
		return console.log(...log);
	}
	public info(...args: string[] | number[]) {
		this.log(LoggerLevel.infoLogger, ...args);
	}
	public warn(...args: string[] | number[]) {
		this.log(LoggerLevel.warnLogger, ...args);
	}
	public error(...args: string[] | number[]) {
		this.log(LoggerLevel.errorLogger, ...args);
	}
	public debug(...args: string[] | number[]) {
		this.log(LoggerLevel.debugLogger, ...args);
	}
	public check(...args: string[] | number[]) {
		this.log(LoggerLevel.checkLogger, ...args);
	}
	public enderbot(...args: string[]) {
		this.log(LoggerLevel.enderbotLogger, ...args);
	}
}