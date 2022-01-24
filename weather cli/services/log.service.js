
import chalk from 'chalk';
import dedent from 'dedent-js';



const printError = (err) => {
    console.log(chalk.bgRed(' ERROR:  ') + err);
};

const printSucces = (mes) => {
    console.log(chalk.bgGreen(' SUCCES:  ') + mes);
};

const printHelp = (mes) => {
    console.log(
        dedent`${chalk.bgCyan(' HELP ')} 
            Без параметров - вывод погоды 
            -s [CITY] для установки города
            -h для вывода помощи
            -t [API_KEY] для сохранения токена            
         `);
        };

 const printWeather = (mes) =>{
     console.log(chalk.bold.bgBlueBright(`Погода в городе ` + `${mes.name}: `) + mes['weather'][0]['description'] + ', ' + 'температура ' +
     mes['main']['temp']);
 };
 

export { printError, printSucces, printHelp, printWeather };