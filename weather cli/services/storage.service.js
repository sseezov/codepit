import { homedir } from 'os';
import { join, basename, dirname, extname, relative, isAbsolute } from 'path';
import { promises, appendFile, readFile, readFileSync } from 'fs';



const filePath = join(homedir(), 'weather-data.json');
const filePath2 = join(homedir(), 'city-data.json');

const TOKEN_DICTIONARY = {
    token: 'token',
    city: 'city'
    //"token":"a5c1e39cb351012e2f60193d7c350d50"
}

const saveKeyValue = async (key, value) => {
    let data = {};
    if (await isExist(filePath)) {
        const file = await promises.readFile(filePath);
        data = JSON.parse(file)
    }

    data[key] = value;
    await promises.writeFile(filePath, JSON.stringify(data));
};

const saveCity = async (key, value) => {
    let data = {};
    if (await isExist(filePath2)) {
        const file = await promises.readFile(filePath2, 'utf-8');
        //console.log('1', file);
        data = JSON.parse(file)
    }        
    data[key] = value;
    await promises.writeFile(filePath2, JSON.stringify(data));

    //      data = {city: 'x'};
    //      data.city = value;      
    // await promises.writeFile(filePath2, JSON.stringify(data));
    //console.log(data.city, file, 'city saved 2');


};

const getKeyValue = async (key) => {
    if (await isExist(filePath)) {
        const file = await promises.readFile(filePath);
        const data = JSON.parse(file);
        return data[key];
    } return undefined;
};

const isExist = async (path) => {
    try {
        await promises.stat(path);
        return true;
    } catch (e) {
        return false;
    }
};

export { saveKeyValue, getKeyValue, saveCity, TOKEN_DICTIONARY, filePath2, logCity };

// const saveCity1 = async (key, value) =>{
//     let data = {};
//     if (await isExist(filePath2)){
//         const file = await promises.readFile(filePath2);
//         data = JSON.parse(file);
//         console.log(data[key]);

//     } 
//         data[key]=value;
//         await promises.writeFile(filePath2, JSON.stringify(data));


// };

let logCity = () => {
    const file = readFileSync(filePath2, 'utf-8');
    let data = JSON.parse(file);
    return data.city;

};

// let logCity2 = async () => {
//     const file = await promises.readFile(filePath2, 'utf-8');
    
//     let data = JSON.parse(file);
    
//     return data.city;

// };

//saveCity('city', 'kemerovo');
//console.log(readFileSync(filePath2, 'utf-8'));

