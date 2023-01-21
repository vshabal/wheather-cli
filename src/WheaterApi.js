import { httpGet } from './services/http.js';

export class WheatherAPI {
    #city = '';

    #token = '';

    static #cityParamName = 'q';

    static #tokenParamName = 'appid';

    static #baseURL = 'https://api.openweathermap.org/data/2.5/weather';

    constructor(city, token) {
        this.#city = city;
        this.#token = token;
    }

    async get() {        
        return await httpGet(this.#createURL());
    }

    #createURL() {
        const url = new URL(WheatherAPI.#baseURL);
        url.searchParams.append(WheatherAPI.#cityParamName, this.#city);
        url.searchParams.append(WheatherAPI.#tokenParamName, this.#token);

        return url.toString();
    }
}
