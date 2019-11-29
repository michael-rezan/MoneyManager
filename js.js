var money = prompt("Введите ваш бюджет: ", '');
var time = prompt("Введите дату в формате YYYY-MM-DD: ", "");
var appData = {
    moneyData: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

let a1 = prompt('Введите обязательную статью расходов в этом месяце'), 
    a2 = prompt('Во сколько обойдется?'),
    a3 = prompt('Введите обязательную статью расходов в этом месяце'),
    a4 = prompt('Во сколько обойдется?');
    
appData.expenses.a1 = a2;
appData.expenses.a3 = a4;

alert("Свободный бюджет на один день: " + appData.moneyData / 30);
