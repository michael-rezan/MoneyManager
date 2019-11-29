var money = prompt("Введите ваш бюджет: ", '');
var time = prompt("Введите дату в формате YYYY-MM-DD: ", "");
var appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

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

appData.moneyPerDay = appData.budget / 30;

alert("Ежедневный бюджет: " + appData.moneyPerDay);

if (appData.budget > 0 && appData.budget <= 200) {
    console.log("Минимальный достаток");
} else if (appData.budget > 200 && appData.budget <= 1000) {
    console.log("Средний достаток");
} else if (appData.budget > 1000) {
    console.log("Высокий достаток");
} else {
    console.log("Произошла ошибка");
}
