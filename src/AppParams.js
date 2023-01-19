import { logError, logSuccess } from './services/log.js';
import { getValueByKey, saveKeyValue } from './services/storage.js';
import { parseArgs } from './utils/parseArgs.js';

export class AppParams {
    static #cityKeyName = 'city';

    static #tokenKeyName = 'token';

    #shouldDisplayHelp = false;

    #city;

    #token;
    
    constructor() {}

    static async init(paramsString) {
        const args = parseArgs(paramsString);
        const appParams = new AppParams();
        if (args.h) {
            appParams.#setShouldDisplayHelp(true);
        }
        
        if (args.c) {
            await appParams.#setCity(args.c);
        }

        if (args.t) {
            await appParams.#setToken(args.t);
        }

        return appParams;
    }

    #setShouldDisplayHelp(value) {
        this.#shouldDisplayHelp = value;
    }

    getShouldDisplayHelp() {
        return this.#shouldDisplayHelp;
    }

    async #setCity(value) {
        try {
            this.#city = value;
            await saveKeyValue(AppParams.#cityKeyName, value);
            logSuccess('city was saved', value);
        } catch (error) {
            logError(error);
        }
    }

    async getCity() {
        try {
            if (this.#city) {
                return await Promise.resolve(this.#city);
            }
    
            return await getValueByKey(AppParams.#cityKeyName);
        } catch (error) {
            logError(error);
        }
    }

    async #setToken(value) {
        try {
            this.#token = value;
            await saveKeyValue(AppParams.#tokenKeyName, value);
            logSuccess('token was saved', value);
        } catch (error) {
            logError(error);
        }
    }

    async getToken() {
        try {
            if (this.#token) {
                return await Promise.resolve(this.#token);
            }
    
            return await getValueByKey(AppParams.#tokenKeyName);
        } catch (error) {
            logError(error);
        }
    }
}
