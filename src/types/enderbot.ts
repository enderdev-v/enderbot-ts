/* eslint-disable @typescript-eslint/no-explicit-any */
import { Message, ChatInputCommandInteraction, Events, SlashCommandBuilder, } from 'discord.js';
import { enderbot } from '@enderbot/client';

// enderbot configuration

export type enderbotConfigType = {
	enderbotColor: number
	errorColor: number
	checkColor: number
	debugColor: number
	infoColor: number
	devsId: string[]
	ownersId: string[]
	prefix: string
}


// Handlers

export type slashcmd = {
	data: SlashCommandBuilder | any,
	run?: (client: enderbot, int: ChatInputCommandInteraction) => void
}

export type cmd = {
	name: string
	alias: string[]
	run: (client: enderbot, message: Message, args: string[]) => void
}

export type subcmd = {
	subcommand: `${string}.${string}`
	run: (client: enderbot, int: ChatInputCommandInteraction) => void
}

export interface DiscordEvent {
	name: `${Events}`,
	run: (client: enderbot, ...args: any) => any
}

// Tipos de handlers

export type EventHandler = {
	default: {
		name: `${Events}` | string,
		run: (client: enderbot, ...args: any) => any
	}
}

export type PrefixHandler = {
	default: {
		name: string
		alias: string[]
		run: (client: enderbot, message: Message, args: string[]) => void
	}
}

export type SlashHandler = {
	default: {
		data: SlashCommandBuilder | any,
		run?: (client: enderbot, int: ChatInputCommandInteraction) => void
	}
}
export type SubcmdHandler = {
	default: {
		subcommand: `${string}.${string}`
		run: (client: enderbot, int: ChatInputCommandInteraction) => void
	}
}

// enum

export enum LoggerLevel {
	infoLogger = 0,
	warnLogger = 1,
	errorLogger = 2,
	debugLogger = 3,
	checkLogger = 4,
	enderbotLogger = 5,
}
export const LoggerColor = {
	infoLogger: '#0F92A5',
	warnLogger: '#D5E413',
	errorLogger: '#E23A3A',
	debugLogger: '#9DEB02',
	checkLogger: '#2B802D',
	enderbotLogger: '#3f7ede',
};