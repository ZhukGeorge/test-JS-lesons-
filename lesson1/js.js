'use strict'
var money,time,a,b;
money = +prompt("Ваш бюджет на месяц?");
time = prompt("Введите дату в формате YYYY-MM-DD","YYYY-MM-DD");
appData = {
    buget:money,
    timeData:time,
    expenses:"",
    optionalExpenses:"",
    income:"",
    savings:false,
};

expenses = (prompt("Введите обязательную статью расходов в этом месяце") + ":" + prompt("Во сколько обойдется?"));
alert(money/30);
console.log(expenses);








//примери задач на собеседовании
// 1)
// let x = 5; console.log(x++);
// Ответ: 5;

// 2)
// console.log([]+false-null+true);
// ответ: nan потомучто -нулл но если -нулл стоит после масива то ок 

// 3)
// let y = 1; let x = y = 2;console.log(x);
// ответ: 2

// 4)
// console.log([] + 1 + 2);
// ответ: 12;

// 5)
// console.log( "1"[0] );
// ответ:1 НЕТ +

// 6)
// console.log(0 || 2);

// var a,b;

// a = [1, 2, 3]; b = [1, 2, 3];
// if ("вжикff12" > "бблоко") {
//     console.log("a");
// }else{
//     console.log(b);
// }


// console.log( 0 ||"" );