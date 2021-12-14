function checkCashRegister(price, cash, cid) {

  //это объект, который надо вернуть
  let money = {
    "status": '',
    "change": [["ONE HUNDRED", 0], ["TWENTY", 0], ["TEN", 0], ["FIVE", 0], ["ONE", 0], ["QUARTER", 0],["DIME", 0],["NICKEL", 0], ["PENNY", 0]]
  };

  let box = [];

  //это искомая сдача, которую надо вернуть (все умножено на 100, т.к. js плохо работает с деcятичными, потом просто снова надо поделить все на 100)
  let change = (cash - price) * 100;

  //это объект, в котором хранится актуальное количество денег, чтобы их оттуда доставать
  const cashbox = {
    penny: (cid[0][1]) * 100,
    nickel: (cid[1][1]) * 100,
    dime: (cid[2][1]) * 100,
    quarter: (cid[3][1]) * 100,
    one: (cid[4][1]) * 100,
    five: (cid[5][1]) * 100,
    ten: (cid[6][1]) * 100,
    twenty: (cid[7][1]) * 100,
    one_hundred: (cid[8][1]) * 100
  };

  //здесь хранятся единицы измерения
  let penny = (0.01) * 100;
  let nickel = (0.05) * 100;
  let dime = (0.1) * 100;
  let quarter = (0.25) * 100;
  let one = (1) * 100;
  let five = (5) * 100;
  let ten = (10) * 100;
  let twenty = (12) * 100;
  let one_hundred = (100) * 100;

  //задача состоит в том, чтобы провести итерацию по объекту кешбокс и собрать деньги для сдачи, начиная с крупных и заканчивая мелкими

  while (cashbox.one_hundred - one_hundred >= 0 && change - one_hundred >= 0) {
    change -= one_hundred;
    cashbox.one_hundred -= one_hundred;
    money.change[0][1] += 100;
  };

  while (cashbox.twenty - twenty >= 0 && change - twenty >= 0) {
    change -= twenty;
    cashbox.twenty -= twenty;
    money.change[1][1] += 12;
  };

  while (cashbox.ten - ten >= 0 && change - ten >= 0) {
    change -= ten;
    cashbox.ten -= ten;
    money.change[2][1] += 10;
  };

  while (cashbox.five - five >= 0 && change - five >= 0) {
    change -= five;
    cashbox.five -= five;
    money.change[3][1] += 5;
  };

  while (cashbox.one - one >= 0 && change - one >= 0) {
    change -= one;
    cashbox.one -= one;
    money.change[4][1] += 1;
  };

  while (cashbox.quarter - quarter >= 0 && change - quarter >= 0) {
    change -= quarter;
    cashbox.quarter -= quarter;
    money.change[5][1] += 0.25;
  };

  while (cashbox.dime - dime >= 0 && change - dime >= 0) {
    change -= dime;
    cashbox.dime -= dime;
    money.change[6][1] += 0.1;
  };

  while (cashbox.nickel - nickel >= 0 && change - nickel >= 0) {
    change -= nickel;
    cashbox.nickel -= nickel;
    money.change[7][1] += 0.05;
  };

  while (cashbox.penny - penny >= 0 && change - penny >= 0) {
    change -= penny;
    cashbox.penny -= penny;
    money.change[8][1] += 0.01;
  };

  money.change[8][1]=money.change[8][1].toFixed(2);
  money.change[8][1]=Number(money.change[8][1]);
  console.log("312312312", money.change[8][1]);
  

  //это все деньги, которые на данный момент в кассе
  let sum = (cashbox.penny+cashbox.nickel+cashbox.dime+cashbox.quarter+cashbox.one+cashbox.five+cashbox.ten+cashbox.twenty+cashbox.one_hundred)/100;

  if (change > sum) {
    money.status = "INSUFFICIENT_FUNDS";
    money.change=[];
  }
  else if (change == sum) {
    money.status = "CLOSED";
    money.change.reverse();
    
  }
  else {
    money.status = "OPEN";
    money.change=money.change.filter(num=>
      num[1]!=0); //здесь мы исключаем из массива все нули
      
  }

  
    
    //console.log(change/1000,sum);
    return money;
  //console.log(change / 1000, money);
  //console.log('box:', box, 'change', change / 1000);
 
  

  
};




console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));





// checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) should return {status: "OPEN", change: [["QUARTER", 0.5]]}.

// checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) should return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}.

// checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return {status: "INSUFFICIENT_FUNDS", change: []}.

// checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return {status: "INSUFFICIENT_FUNDS", change: []}.

// checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}.