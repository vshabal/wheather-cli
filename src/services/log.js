import chalk from 'chalk';

const logHelp = (...info) => {
    const header = chalk.bgCyan('HELP');
    console.log(header, ...info);
};

const logSuccess = (...info) => {
    const header = chalk.bgGreen('SUCCESS');
    console.log(header, ...info);
};

const logError = (...info) => {
    const header = chalk.bgRed('ERROR');
    console.log(header, ...info)
};

export { logHelp, logSuccess, logError };
