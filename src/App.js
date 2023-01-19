import { AppParams } from './AppParams.js';
import { logHelp } from './services/log.js';

export class App {
    #appParams;

    static #helpString = '-h ouput help' + '\n';

    constructor(appParams) {
        this.#appParams = appParams;
    }

    static init(paramsString) {
        const appParams = AppParams.init(paramsString);

        return new App(appParams);
    }

    start() {
        this.#printHelpConditionally();
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
