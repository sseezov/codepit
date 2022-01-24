import axios from 'axios';
import https from 'https';

import { getKeyValue, TOKEN_DICTIONARY } from './storage.service.js';
import { runMain } from 'module';

const getWeather = async (city) => {
    const token = await getKeyValue(TOKEN_DICTIONARY.token);
    if (!token) {
        throw new Error('Не задан ключ API, задайте его через команду -t [API KEY]');
    }
    const { data } = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
        params: {
        q: city,
        appid: token,
        lang: 'ru',
        units: 'metric'

    }})
    return data;
};


    //     const url = new URL('https://api.openweathermap.org/data/2.5/weather');
    //     url.searchParams.append('q', city);
    //     url.searchParams.append('appid', token);
    //     url.searchParams.append('lang', 'ru');
    //     url.searchParams.append('units', 'metric');
    //     https.get(url, (res)=>{
    //         let result;
    //         res.on('data', (chunk)=>{
    //             result+= chunk;
    //         });
    //         res.on('end',()=>{
    //             console.log(result);
    //         });
    //         // res.on('error', (err)=>{
    //         //     console.log(err);
    //         // });//Для работы этого нужно все оформить в промис

    //     })


export { getWeather };