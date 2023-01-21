import { httpGet } from './services/http.js';
import { logError, logSuccess } from './services/log.js';

export class Wheather {
    #city = '';

    #token = '';

    constructor(city, token) {
        this.#city = city;
        this.#token = token;
    }

    async load() {
        if (this.#canLoad()) {
            try {
                const weather = await this.#get(this.#city, this.#token);
                logSuccess('here are the weather \n', weather.data);
            } catch (error) {
                logError('there were problems with loading wheather \n', error.message);
            }
        } else {
            logError('city and token are required to load whether');
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