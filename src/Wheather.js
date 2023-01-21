import { httpGet } from './services/http.js';
import { logError, logSuccess } from './services/log.js';

export class Wheather {
    #city = '';

    #token = '';

    static #loadSuccessfulMessage = 'here are the weather \n';

    static #loadErrorMessage = 'there were problems with loading wheather \n';

    static #notEnoughParamsErrorMessage = 'city and token are required to load wheather';

    constructor(city, token) {
        this.#city = city;
        this.#token = token;
    }

    async load() {
        if (this.#canLoad()) {
            try {
                const weather = await this.#get(this.#city, this.#token);
                logSuccess(Wheather.#loadSuccessfulMessage, weather.data);
            } catch (error) {
                logError(Wheather.#loadErrorMessage, error.message);
            }
        } else {
            logError(Wheather.#notEnoughParamsErrorMessage);
        }
    }

    #canLoad() {
        return [this.#city, this.#token].every((param) => !!param);
    }

    async #get(city, token) {
        const url = new URL('https://api.openweathermap.org/data/2.5/weather');
        url.searchParams.append('q', city);
        url.searchParams.append('appid', token);
        
        return await httpGet(url.toString());
    }
}