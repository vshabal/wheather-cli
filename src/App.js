import { AppParams } from './AppParams.js';
import { Help } from './Help.js';
import { Wheather } from './Wheather.js';

export class App {
    #appParams;

    constructor(appParams) {
        this.#appParams = appParams;
    }

    static async init(paramsString) {
        const appParams = await AppParams.init(paramsString);

        return new App(appParams);
    }

    async start() {
        const help = new Help(this.#appParams.getShouldDisplayHelp());
        help.print();

        const city = await this.#appParams.getCity()
        const token = await this.#appParams.getToken()
        const wheather = new Wheather(city, token);
        await wheather.load();
    }
}
