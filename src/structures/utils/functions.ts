/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Message, SnowflakeUtil } from 'discord.js';

async function userGet(event: Message, args: string[]) {
	if (!args[0]) {
		return false;
	}
	// @ts-ignore
	const userget = args[0] && !isNaN(Number(args[0])) && SnowflakeUtil.deconstruct(args[0]).timestamp !== null ? await event.guild.members.fetch(args[0]) : (await event.guild.members.fetch({ query: args[0], limit: 1,  })).first();
	const user = event.mentions.members?.first() || userget;
	return user;
} 

export {
	userGet
}; 