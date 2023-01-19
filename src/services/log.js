import chalk from 'chalk';

const logDebug = (...info) => {
    const header = chalk.bgYellow('DEBUG');
    console.log(header, ...info);
}

const logHelp = (...info) => {
    const header = chalk.bgCyan('HELP');
    console.log(header, ...info);
}

export { logDebug, logHelp };
