const isStringArgumentName = (value) => value.charAt(0) === '-';
const getArgumentNameFromString = (value) => value.substring(1);

const parseArgs = (args) => {
    const [executerPath, filePath, ...meaningfulArgs] = args;

    return meaningfulArgs.reduce((acc, value, index) => {
        if(isStringArgumentName(value)) {
            const argumentName = getArgumentNameFromString(value);
            const isLastItem = index === meaningfulArgs.length - 1;
            const isNextItemArgumentName = meaningfulArgs[index + 1] && isStringArgumentName(meaningfulArgs[index + 1]);
            if (isLastItem || isNextItemArgumentName) {
                acc[argumentName] = true;
            } else {
                acc[argumentName] = meaningfulArgs[index + 1];
            }
        }

        return acc;
    }, {});
};

export { parseArgs };
