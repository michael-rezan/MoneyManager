let money, time,
    startButtonNode = document.querySelector('#start'),
    budgetNode = document.querySelector('.budget-value'),
    dayBudgetNode = document.querySelector('.daybudget-value'),
    expensesNode = document.querySelector('.expenses-value'),
    levelValueNode = document.querySelector('.level-value'),
    optExpensesNode = document.querySelector('.optionalexpenses-value'),
    incomeNode = document.querySelector('.income-value'),
    monthSavingsNode = document.querySelector('.monthsavings-value'),
    yearSavingsNode = document.querySelector('.yearsavings-value'),
    yearNode = document.querySelector('.year-value'),
    monthNode = document.querySelector('.month-value'),
    dayNode = document.querySelector('.day-value'),
    expensesItemsNode = document.querySelectorAll('.expenses-item'),
    acceptButtonExpensesNode = document.getElementsByTagName('button')[0],
    acceptButtonOptExpensesNode = document.getElementsByTagName('button')[1],
    countBudgetButtonNode = document.getElementsByTagName('button')[2],
    optExpensesItemsNode = document.querySelectorAll('.optionalexpenses-item'),
    chooseIncomeNode = document.querySelector('#income'),
    checkSavingsNode = document.querySelector('#savings'),
    chooseSumSavingsNode = document.querySelector('#sum'),
    choosePercentSavingsNode = document.querySelector('#percentS');

startButtonNode.addEventListener('click', function() {
    time = prompt("Введите дату в формате YYYY-MM-DD: ", "");
    money = +prompt("Введите ваш бюджет: ", '');

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Введите ваш бюджет: ", '');
    }
    appData.budget = money;
    budgetNode.textContent = appData.budget;
    appData.timeData = time;
    yearNode.value = new Date(Date.parse(time)).getFullYear();
    monthNode.value = new Date(Date.parse(time)).getMonth() + 1;
    if (monthNode.value < 10) {
        monthNode.value = '0' + monthNode.value;
    }
    dayNode.value = new Date(Date.parse(time)).getDate();
    if (dayNode.value < 10) {
        dayNode.value = '0' + dayNode.value;
    }
});

acceptButtonExpensesNode.addEventListener('click', function() {
    if (appData.budget != undefined) {
        let sum = 0;

        for (let i = 0; i < expensesItemsNode.length; i++) {
            let a = expensesItemsNode[i].value,
                b = +expensesItemsNode[++i].value;
        
            if (typeof(a) != null && typeof(b) != null && a !="" && b != "" &&
                a.length <= 50) {
                appData.expenses[a] = b;
                sum += +b;
                console.log("Done");
            } else {
                i = -2;
            }
        }
        expensesNode.textContent = sum;
    } else {
        alert("Сперва начните расчет!");
    }
});

countBudgetButtonNode.addEventListener('click', function() {
    if (appData.budget != undefined) {
        appData.moneyPerDay = ((appData.budget - (+expensesNode.textContent)) / 30);
        if (appData.moneyPerDay < 0) {
            dayBudgetNode.textContent = 'У Вас будут долги в размере: ' + (appData.moneyPerDay * 30).toFixed();
        } else if (appData.moneyPerDay < 1) {
            dayBudgetNode.textContent = '<' + appData.moneyPerDay.toFixed();
        } else {
            dayBudgetNode.textContent = appData.moneyPerDay.toFixed();
        }

        if (appData.budget > 0 && appData.budget <= 200) {
            levelValueNode.textContent = "Минимальный достаток";
        } else if (appData.budget > 200 && appData.budget <= 1000) {
            levelValueNode.textContent = "Средний достаток";
        } else if (appData.budget > 1000) {
            levelValueNode.textContent = "Высокий достаток";
        } else {
            levelValueNode.textContent = "Произошла ошибка";
        }
    } else {
        alert("Сперва начните расчет!!!");
    }
});

acceptButtonOptExpensesNode.addEventListener('click', function() {
    if (appData.budget != undefined) {
        for (let i = 0; i < optExpensesItemsNode.length; i++) {
            let optExp = optExpensesItemsNode[i].value;
            appData.optionalExpenses[i] = optExp;
            optExpensesNode.textContent += appData.optionalExpenses[i] + ' ';
        }
    } else {
        alert("Сперва начните расчет!");
    }
});

chooseIncomeNode.addEventListener('input', function() {
    if (appData.budget != undefined) {
        let items = chooseIncomeNode.value;
        appData.income = items.split(", ");
        incomeNode.textContent = appData.income;
    } else {
        alert('Сперва начните расчет!');
    }
});

checkSavingsNode.addEventListener('click', function() {
    if (appData.budget != undefined) {
        if (appData.savings == false) {
            appData.savings = true;
        } else {
            appData.savings = false;
        }
    } else {
        alert('Сперва начните расчет!');
        checkSavingsNode.checked = false;
    }
});

var appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
};

console.log("Наша программа включает в себя данные: ");
{
    let i = 1;
    for (let key in appData) {
        console.log(i++ + ") " + key);
    }
}

