/*
Arrays and loops practice
*/

/* 
When user clicks 'Roll Dice'
Computer will roll 1 D4 dice
Computer will output result of dice
Computer will output number of dice rolled.
Then any number of dice being able to roll a D4
*/

/* version 1 of code
var listOfD4dice = [];

var rollAD4 = function () {
  return Math.ceil(Math.random() * 4);
};

var totalSumOfD4 = 0;

var addUpD4 = function () {
  totalSumOfD4 = 0;
  for (let i = 0; i < listOfD4dice.length; i += 1) {
    totalSumOfD4 += listOfD4dice[i];
  }
};

var main = function (D4input) {
  for (let i = 0; i < Number(D4input); i += 1) {
    var D4roll = rollAD4();
    listOfD4dice.push(D4roll);
  }
  console.log(String(listOfD4dice));
  console.log(totalSumOfD4);
  addUpD4();
  return `You rolled ${D4input} D4 dice. <br> 
  Here are the results of your rolls: ${String(listOfD4dice)}<br> 
  Total = ${totalSumOfD4} `;
};
*/

//  version 2 of code
var listOfAlldice = [[], [], [], [], [], [], []];

var rollAD4 = function () {
  return Math.ceil(Math.random() * 4);
};

var rollAD6 = function () {
  return Math.ceil(Math.random() * 6);
};

var rollAD8 = function () {
  return Math.ceil(Math.random() * 8);
};

var rollAD10 = function () {
  return Math.ceil(Math.random() * 10);
};

var rollAD12 = function () {
  return Math.ceil(Math.random() * 12);
};

var rollAD20 = function () {
  return Math.ceil(Math.random() * 20);
};

var rollAD100 = function () {
  return Math.ceil(Math.random() * 100);
};

var totalSumOfD4 = 0;
var totalSumOfD6 = 0;
var totalSumOfD8 = 0;
var totalSumOfD10 = 0;
var totalSumOfD12 = 0;
var totalSumOfD20 = 0;
var totalSumOfD100 = 0;

var addUpD4 = function () {
  for (let i = 0; i < listOfAlldice[0].length; i += 1) {
    totalSumOfD4 += listOfAlldice[0][i];
  }
};

var addUpD6 = function () {
  for (let i = 0; i < listOfAlldice[1].length; i += 1) {
    totalSumOfD6 += listOfAlldice[1][i];
  }
};

var addUpD8 = function () {
  for (let i = 0; i < listOfAlldice[2].length; i += 1) {
    totalSumOfD8 += listOfAlldice[2][i];
  }
};
var addUpD10 = function () {
  for (let i = 0; i < listOfAlldice[3].length; i += 1) {
    totalSumOfD10 += listOfAlldice[3][i];
  }
};
var addUpD12 = function () {
  for (let i = 0; i < listOfAlldice[4].length; i += 1) {
    totalSumOfD12 += listOfAlldice[4][i];
  }
};
var addUpD20 = function () {
  for (let i = 0; i < listOfAlldice[5].length; i += 1) {
    totalSumOfD20 += listOfAlldice[5][i];
  }
};
var addUpD100 = function () {
  for (let i = 0; i < listOfAlldice[6].length; i += 1) {
    totalSumOfD100 += listOfAlldice[6][i];
  }
};

var main = function (
  D4input,
  D6input,
  D8input,
  D10input,
  D12input,
  D20input,
  D100input
) {
  listOfAlldice = [[], [], [], [], [], [], []];
  totalSumOfD4 = 0;
  totalSumOfD6 = 0;
  totalSumOfD8 = 0;
  totalSumOfD10 = 0;
  totalSumOfD12 = 0;
  totalSumOfD20 = 0;
  totalSumOfD100 = 0;

  for (let i = 0; i < Number(D4input); i += 1) {
    var D4roll = rollAD4();
    listOfAlldice[0].push(D4roll);
  }

  for (let i = 0; i < Number(D6input); i += 1) {
    var D6roll = rollAD6();
    listOfAlldice[1].push(D6roll);
  }

  for (let i = 0; i < Number(D8input); i += 1) {
    var D8roll = rollAD8();
    listOfAlldice[1].push(D8roll);
  }

  for (let i = 0; i < Number(D10input); i += 1) {
    var D10roll = rollAD10();
    listOfAlldice[1].push(D10roll);
  }

  for (let i = 0; i < Number(D12input); i += 1) {
    var D12roll = rollAD12();
    listOfAlldice[1].push(D12roll);
  }

  for (let i = 0; i < Number(D20input); i += 1) {
    var D20roll = rollAD20();
    listOfAlldice[1].push(D20roll);
  }

  for (let i = 0; i < Number(D100input); i += 1) {
    var D100roll = rollAD100();
    listOfAlldice[1].push(D100roll);
  }

  addUpD4();
  addUpD6();
  addUpD8();
  addUpD10();
  addUpD12();
  addUpD20();
  addUpD100();

  return `You rolled ${D4input} D4 dice. <br> 
  Here are the results of your rolls: ${listOfAlldice[0]}<br> 
  Total = ${totalSumOfD4} <br>
  You rolled ${D6input} D6 dice. <br> 
  Here are the results of your rolls: ${String(listOfAlldice[1])}<br> 
  Total = ${totalSumOfD6} 
  You rolled ${D8input} D8 dice. <br> 
  Here are the results of your rolls: ${String(listOfAlldice[2])}<br> 
  Total = ${totalSumOfD8} 
  You rolled ${D10input} D10 dice. <br> 
  Here are the results of your rolls: ${String(listOfAlldice[3])}<br> 
  Total = ${totalSumOfD10} 
  You rolled ${D12input} D12 dice. <br> 
  Here are the results of your rolls: ${String(listOfAlldice[4])}<br> 
  Total = ${totalSumOfD12} 
  You rolled ${D20input} 20 dice. <br> 
  Here are the results of your rolls: ${String(listOfAlldice[5])}<br> 
  Total = ${totalSumOfD20} 
  You rolled ${D100input} D100 dice. <br> 
  Here are the results of your rolls: ${String(listOfAlldice[6])}<br> 
  Total = ${totalSumOfD100} `;
};
