import { AppParams } from './AppParams.js';
import { httpGet } from './services/http.js';
import { logError, logHelp, logSuccess } from './services/log.js';

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
        const city = await this.#appParams.getCity()
        const token = await this.#appParams.getToken()
        const areParamsEnoughToLoadWheather = [city, token].every((appParam) => !!appParam);
        if (areParamsEnoughToLoadWheather) {
            try {
                const weather = await this.loadWeather(city, token);
                logSuccess('here are the weather \n', weather.data);
            } catch (error) {
                logError('there were problems with loading wheather \n', error.message);
            }
        } else {
            logError('city and token are required to load whether');
        }

    }

    async loadWeather(city, token) {
        const url = new URL('https://api.openweathermap.org/data/2.5/weather');
        url.searchParams.append('q', city);
        url.searchParams.append('appid', token);
        
        return await httpGet(url.toString());
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
