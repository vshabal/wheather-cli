import { logDebug } from './services/log.js';

export class App {
    #paramsString;

    constructor(paramsString) {
        logDebug('[App.constructor]', paramsString);

        this.#paramsString = paramsString;
    }

    static init(paramsString) {
        logDebug('[App.init], paramsString', paramsString);
    
        return new App(paramsString);
    }

    start() {
        logDebug('[App.start]', 'app started');
    }
}
