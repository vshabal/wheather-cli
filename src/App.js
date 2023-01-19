import { AppParams } from './AppParams.js';
import { logDebug, logHelp } from './services/log.js';

export class App {
    #appParams;

    static #helpString = '-h ouput help' + '\n';

    constructor(appParams) {
        this.#appParams = appParams;
    }

    static async init(paramsString) {
        const appParams = await AppParams.init(paramsString);

        return new App(appParams);
    }

    async start() {
        this.#printHelpConditionally();
        logDebug('city', await this.#appParams.getCity());
    }

    #printHelpConditionally() {
        if (this.#appParams.getShouldDisplayHelp()) {
            this.#printHelp();
        }
    }

    #printHelp() {
        logHelp(App.#helpString);
    }
}
