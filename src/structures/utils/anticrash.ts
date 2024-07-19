import chalk from 'chalk';

process.removeAllListeners();
process.on('unhandledRejection', e => {
	console.error(chalk.bold.red('AntiCrash System:'), e);
});
process.on('uncaughtException', (e, origin) => {
	console.error(chalk.bold.yellow('AntiCrash System:'));
	console.log(e, origin);
});
process.on('uncaughtExceptionMonitor', (e, origin) => {
	console.error(e, origin);
});
process.on('multipleResolved', () => { });
console.log(chalk.bold.cyan('Anticrash cargado'));
