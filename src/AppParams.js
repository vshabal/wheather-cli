import { parseArgs } from './utils/parseArgs.js';

export class AppParams {
    #shouldDisplayHelp = false;
    
    constructor() {}

    static init(paramsString) {
        const args = parseArgs(paramsString);
        const appParams = new AppParams();
        if (args.h) {
            appParams.#setShouldDisplayHelp(true);
        }

        return appParams;
    }

    #setShouldDisplayHelp(value) {
        this.#shouldDisplayHelp = value;
    }

    getShouldDisplayHelp() {
        return this.#shouldDisplayHelp;
    }
}
