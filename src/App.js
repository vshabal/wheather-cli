import { AppParams } from './AppParams.js';
import { Help } from './Help.js';
import { Wheather } from './Wheather.js';

export class App {
    #appParams = null;

    constructor(paramsString) {
        this.#appParams = new AppParams(paramsString);
    }

    async start() {
        await this.#appParams.parseParams();

        const help = new Help(this.#appParams.getShouldDisplayHelp());
        help.print();

        const city = await this.#appParams.getCity()
        const token = await this.#appParams.getToken()
        const wheather = new Wheather(city, token);
        await wheather.load();
    }
}
