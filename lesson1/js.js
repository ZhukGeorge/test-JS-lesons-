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
// ответ:1, бо НЕТ +

// 6)
// console.log(2 && 1 && null && 0 && undefined);
// ответ: null;

// 7)
// var a,b;
// console.log(!!(a && b)); console.log(a && b);
// ответ: false в первом и undefined во втором

// 8)
// console.log(null || 2 && 3 || 4 );
// Ответ: 3;

// 9)
// var a,b;
//  a = [1, 2, 3]; b = [1, 2, 3];
// if (a == b) {
//     console.log("klas");
// }else{
//     console.log("zopa");
// }
// ответ: жопа;

// 10)
// if ("ёжик" > "яблоко") {
//     console.log("a");
// }else{
//     console.log(b);
// }
// ответ:ежик), прикол в порядке букв по алфавиту 

// 11)
// console.log(0 || "" || 2 || undefined || true || falsе);
// ответ: 2