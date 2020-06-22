var money,time;
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