'use strict'
let money = +prompt("Ваш бюджет на месяц?");
let time = prompt("Введите дату в формате YYYY-MM-DD","YYYY-MM-DD");
let appData = {
    budget:money,
    timeData:time,
    expenses:{},
    optionalExpenses:{},
    income:{},
    savings:false,
};

    
for (let i = 0; i < 2; i++){
    let a = prompt("Введите обязательную статью расходов в этом месяце",''),
        b = prompt("Во сколько обойдется?",'');

    if ( (typeof(a))==='string' && (typeof(a)) !=null && (typeof(b)) !=null && a != '' && b != '' && a.length < 50) {
        console.log("заэбысь")
        appData.expenses[a] = b;
    }else{
        i--;
    }    
};

while (let i = o)



appData.moneyPerDay = appData.budget/30;


alert("ежедневний бюджет:" + appData.moneyPerDay);

if (appData.moneyPerDay < 100){
    console.log("минимал уровень достатка");
}else{
    if (appData.moneyPerDay < 100 && appData.moneyPerDay < 2000){
        console.log("средний уровень достатка");
    }else{
        if (appData.moneyPerDay > 2000){
            console.log(",багатусон уровень достатка");
        }else{
            console.log("ошибка");
        }
    }
}











/* примери задач на собеседовании
1)
let x = 5; console.log(x++);
Ответ: 5;

2)
console.log([]+false-null+true);
ответ: nan потомучто -нулл но если -нулл стоит после масива то ок 

3)
let y = 1; let x = y = 2;console.log(x);
ответ: 2

4)
console.log([] + 1 + 2);
ответ: 12;

5)
console.log( "1"[0] );
ответ:1, бо НЕТ +

6)
console.log(2 && 1 && null && 0 && undefined);
ответ: null;

7)
var a,b;
console.log(!!(a && b)); console.log(a && b);
ответ: false в первом и undefined во втором

8)
console.log(null || 2 && 3 || 4 );
Ответ: 3;

9)
var a,b;
 a = [1, 2, 3]; b = [1, 2, 3];
if (a == b) {
    console.log("klas");
}else{
    console.log("zopa");
}
ответ: жопа;

10)
if ("ёжик" > "яблоко") {
    console.log("a");
}else{
    console.log(b);
}
ответ:ежик), прикол в порядке букв по алфавиту 

11)
console.log(0 || "" || 2 || undefined || true || falsе);
ответ: 2 */