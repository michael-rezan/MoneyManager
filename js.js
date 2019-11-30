let money, time;

function start() {
    money = +prompt("Введите ваш бюджет: ", '');
    time = prompt("Введите дату в формате YYYY-MM-DD: ", "");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Введите ваш бюджет: ", '');
    }
}

start();

var appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

function choiceExpenses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt('Введите обязательную статью расходов в этом месяце'),
            b = +prompt('Во сколько обойдется?');
    
        if (typeof(a) != null && typeof(b) != null && a !="" && b != "" &&
             a.length <= 50) {
            appData.expenses[a] = b;
            console.log("Done");
        } else {
            i--;
        }
    }
}

choiceExpenses();

// let i = 0;
// while (i < 2) {
//     i++;
//     let a = prompt('Введите обязательную статью расходов в этом месяце'),
//     b = +prompt('Во сколько обойдется?');

//     if (typeof(a) != null && typeof(b) != null && a !="" && b != "" &&
//         a.length <= 50) {
//         appData.expenses[a] = b;
//         console.log("Done");
//     } else {
//         i--;
// }
// }

// let i = 0;
// do {
//     i++;
//     let a = prompt('Введите обязательную статью расходов в этом месяце'),
//         b = +prompt('Во сколько обойдется?');

//     if (typeof(a) != null && typeof(b) != null && a !="" && b != "" &&
//          a.length <= 50) {
//         appData.expenses[a] = b;
//         console.log("Done");
//     } else {
//         i--;
//     }
// } while (i < 2);

function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert("Ежедневный бюджет: " + appData.moneyPerDay);
}

detectDayBudget();

function detectLevel() {
    if (appData.budget > 0 && appData.budget <= 200) {
        console.log("Минимальный достаток");
    } else if (appData.budget > 200 && appData.budget <= 1000) {
        console.log("Средний достаток");
    } else if (appData.budget > 1000) {
        console.log("Высокий достаток");
    } else {
        console.log("Произошла ошибка");
    }
}

detectLevel();

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений? "),
            percent = +prompt("Под какой процент?");

        appData.monthIncome = save/100/12*percent;
        alert("Сумма дохода от вашего депозита: " + appData.monthIncome);
    }
}

function chooseOptExpenses() {
    let optExp;
    for (let i = 0; i < 3; i++) {
        optExp = null;
        optExp = prompt("Введите статью необязательных расходов " + i +" time");
        while (optExp == "" || optExp == null) {
            optExp = prompt("Введите статью необязательных расходов ");
        }
        appData.optionalExpenses[i] = optExp;
    }
}

chooseOptExpenses();