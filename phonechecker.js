function confirmEnding(str, target) {
    let arr=str.split('');//получаем массив из строкового значения первого аргумента
    // console.log(arr);
    let tarr = target.split('');//получаем массив из проверочной строки аргумента
    let comp1=[];
    let comp2=[];
    // console.log(tarr.length, arr, tarr)//значения верны
    for (let i=tarr.length; i>0; i--){//Запускаем цикл, который идет пока i=длине проверочного аргумента и больше нуля с шагом минус 1.
    // console.log(arr[arr.length-i],tarr[tarr.length-i])
    comp1.push(arr[arr.length-i]), comp2.push(tarr[tarr.length-i]);
    // console.log(comp1,comp2)
    }
    // console.log(comp1,comp2, comp1==comp2);
    if (comp1.toString()==comp2.toString()){
    return true} else return false};