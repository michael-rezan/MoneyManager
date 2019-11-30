let money, time;

function start() {
    money = +prompt("Введите ваш бюджет: ", '');
    time = prompt("Введите дату в формате YYYY-MM-DD: ", "");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Введите ваш бюджет: ", '');
    }
}

var appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
    chooseExpenses: function() {
        for (let i = 0; i < 2; i++) {
            let a = prompt('Введите обязательную статью расходов: '),
                b = +prompt('Во сколько обойдется?');
        
            if (typeof(a) != null && typeof(b) != null && a !="" && b != "" &&
                 a.length <= 50) {
                appData.expenses[a] = b;
                console.log("Done");
            } else {
                i--;
            }
        }
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert("Ежедневный бюджет: " + appData.moneyPerDay);
    },
    detectLevel: function() {
        if (appData.budget > 0 && appData.budget <= 200) {
            console.log("Минимальный достаток");
        } else if (appData.budget > 200 && appData.budget <= 1000) {
            console.log("Средний достаток");
        } else if (appData.budget > 1000) {
            console.log("Высокий достаток");
        } else {
            console.log("Произошла ошибка");
        }
    },
    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений? "),
                percent = +prompt("Под какой процент?");
    
            appData.monthIncome = save/100/12*percent;
            alert("Сумма дохода от вашего депозита: " + appData.monthIncome);
        }
    },
    chooseOptExpenses:function() {
        let optExp;
        for (let i = 0; i < 3; i++) {
            optExp = null;
            optExp = prompt("Введите статью необязательных расходов: ");
            if (optExp == "" && optExp == null) {
            appData.optionalExpenses[i] = optExp;
            }
        }
    },
    chooseIncome: function() {
        let items = prompt("Введите источники доп. дохода: ");
        while (items == "" || items == null || typeof(items) != 'string') {
            items = prompt("Введите источники доп. дохода: ");
        }
        appData.income = items.split(", ");
        appData.income.push(prompt("Может что-то еще? "));
        appData.income.sort();

        console.log("Способы доп. заработка: ");
        appData.income.forEach(function(item, index) {
            console.log((index + 1) + ") " + item);
        });
    }
};

console.log("Наша программа включает в себя данные: ");
{
    let i = 1;
    for (let key in appData) {
        console.log(i++ + ") " + key);
    }
}

