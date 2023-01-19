export class App {
    #paramsString;

    constructor(paramsString) {
        console.log('[App.constructor]', paramsString);

        this.#paramsString = paramsString;
    }

    static init(paramsString) {
        console.log('[App.init], paramsString', paramsString);
    
        return new App(paramsString);
    }

    start() {
        console.log('[App.start]', 'app started');
    }
}
