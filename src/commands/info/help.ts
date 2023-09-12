
import fs from 'node:fs';
import path from 'node:path';
import { cmd } from '../../types/enderbot';

const help: cmd = {
	name: 'help',
	alias: [],
	
	run (client, message, args) {
		const categoria = args.join(' ');

		const categorias = fs.readdirSync(path.join('./src/commands'));
		if (!categoria) return message.channel.send(`# Comando help \nhola  estas son las categorias de mis comandos \n ${categorias.join('\n ')}`);
		
		if (!categorias.includes(categoria)) return message.channel.send(`No se encontro la categoria "${categoria}"`);
		const cmds = fs.readdirSync(path.join('./src/commands', categoria));
		const commands: string[] = [];
		cmds.forEach(cmd => {		
			// eslint-disable-next-line @typescript-eslint/no-var-requires
			const command = require(`../../commands/${categoria}/${cmd}`);
			commands.push(`* ${command.default.name}`);
		});	

		message.channel.send(`# Comandos ${categoria} \n ${commands.join('\n')}`);
	
	}
};

export default help;