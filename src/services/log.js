import chalk from 'chalk';

const logDebug = (...info) => {
    const header = chalk.bgYellow('DEBUG');
    console.log(header, ...info);
}

export { logDebug };
