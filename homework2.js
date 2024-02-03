var prompt = require('prompt');

//
// Start the prompt
//
prompt.start();

//
// Get two properties from the user: username and email
//
prompt.get(['yearBirthday'], function (err, result) {

    var getYearBirthday = result.yearBirthday;

    var currentYear = 2024;
    var myAge = currentYear - getYearBirthday;
    var lastNumberOfAge = Number(myAge % 10);
    var checkgetYearBirthday = isNaN(getYearBirthday);

    if (checkgetYearBirthday === true || getYearBirthday < 0 || getYearBirthday === " " || getYearBirthday === true || getYearBirthday === false
        || getYearBirthday === '' || getYearBirthday % 1 > 0) {
        console.log("Ви ввели не корректні дані.")
    } else {

        if (myAge === 1 || lastNumberOfAge === 1 && myAge > 20) {
            console.log("Твій вік " + myAge + " рік");
        } else if (myAge >= 2 && myAge <= 4 || myAge > 20 && lastNumberOfAge >= 2 && lastNumberOfAge <= 4) {
            console.log("Твій вік " + myAge + " роки");
        } else if (myAge >= 5 && myAge <= 20 || lastNumberOfAge >= 5 && lastNumberOfAge <= 9 || lastNumberOfAge === 0 && currentYear !== Number(getYearBirthday)) {
            console.log("Твій вік " + myAge + " років");
        } else if (currentYear === Number(getYearBirthday)) {
            console.log("Тобі менше року");
        } else {
            console.log("Ти ще не народився");
        };

    };


    console.log("Тест. Перевірка позитивних значень");
    for (let i = 0; i < 100; i++) {
        if (i === 0) console.log("Тобі менше року");
        else if (i === 1 || i > 20 && i % 10 === 1) console.log("Твій вік " + i + " рік");
        else if (i >= 2 && i <= 4 || i > 20 && i % 10 >= 2 && i % 10 <= 4) console.log("Твій вік " + i + " роки");
        else if (i >= 5 && i <= 20 || i % 10 >= 5 && i % 10 <= 9 || i % 10 === 0) console.log("Твій вік " + i + " років");
        else { "Шось пішло не так " + i }

    };



});




