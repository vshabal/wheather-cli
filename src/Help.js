import { logHelp } from './services/log.js';

export class Help {
    static #helpText = '-h ouput help' + '\n'
        + '-t token' + '\n'
        + '-c city';

    #shouldPrintHelp = false;

    constructor(shouldPrintHelp) {
        this.#shouldPrintHelp = shouldPrintHelp;
    }

    print() {
        if (this.#shouldPrintHelp) {
            logHelp(Help.#helpText);
        }
    }
}
