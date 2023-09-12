/* eslint-disable @typescript-eslint/no-explicit-any */
import { Message, ChatInputCommandInteraction, Events } from 'discord.js';
import { enderbot } from '../structures/Client';

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
    run: (client: enderbot, ...args?: any) => any
}

// Tipos de handlers

export type EventHandler = {
    default: {
        name: `${Events}` | string,
        run: (client: enderbot, ...args?: any) => any
    }
}

export type PrefixHandler = {
    default: {
        name: string
        alias: string[]
        run: (client: enderbot, message: Message, args: string[]) => void
    }
}

export type SubcmdHandler = {
    default: {
        subcommand: `${string}.${string}`
        run: (client: enderbot, int: ChatInputCommandInteraction) => void
    }
}