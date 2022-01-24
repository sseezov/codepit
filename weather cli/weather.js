#!usr/bin/env node

import { getArgs } from './helpers/args.js';
import { getWeather } from './services/api.service.js';
import { printHelp, printSucces, printError, printWeather } from './services/log.service.js';
import { saveKeyValue, saveCity, TOKEN_DICTIONARY, logCity } from './services/storage.service.js';
//import { getWeather } from './services/api.service.js';


const saveToken = async (token) => {
    if (!token.length) {
        printError('Не передан токен');
        return;
    }

    try {
        await saveKeyValue(TOKEN_DICTIONARY.token, token);
        printSucces('token was succesfully saved');
    } catch (e) {
        printError(e.message);
    }
};

const getCity = async (city) => {
    if (!city.length) {
        printError('Не передан город');
        return;
    }
    try {
        await saveCity(TOKEN_DICTIONARY.city, city);
        printSucces('Город сохранен');
    }
    catch (e) {
        printError(e.message);
    }};

    const getForcast = async () => {
        try {
            
            const weather = await getWeather(logCity());
            printWeather(weather);
            
        } catch (e) {
            if (e?.response?.status == 404) {
                printError('Неверно указан город')
                
            } else if (e?.response?.status == 401) {
                printError('Неверно указан токен')
            } else {
                printError(e.message)
                
            }
        }
    };

    const initCLI = async () => {
        const args = getArgs(process.argv);
        //console.log(args);

        if (args.h) {
            printHelp();
        }
        if (args.s) {
            return getCity(args.s);
        }
        if (args.t) {
            return saveToken(args.t);
        } else getForcast();
    };

    initCLI();

    //getForcast();


