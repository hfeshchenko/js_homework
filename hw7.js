const { log } = require("console");
const { toNumber } = require("lodash");

console.log("Задание №1");
var getValue = "aaa";
var result;

function isNanFunction(getValue) {
    let convertToNumber = toNumber(getValue);
    //console.log(convertToNumber); 
    if (convertToNumber !== convertToNumber) {
        return true;
    }
    return false;
}

result = isNanFunction(getValue);
console.log(result);

console.log("Задание №2");
var mainStr = "Необхідно написати власну реалізацію функцій";
var changeStr = "власну"
var extraSymbol = "*";
var numberExtraSymbol = 12;
var startEnd = true;
var result;

result = pad(changeStr, extraSymbol, numberExtraSymbol, startEnd);
console.log(result);

function pad(str, addSymbol, numberAddSymbol, startOrEnd) {
    let findPositionChangeStr = mainStr.indexOf(str);
    let howManyAddSymbol = Math.abs(str.length - numberAddSymbol);
    let newAddSymbol = addSymbol.repeat(howManyAddSymbol);
    let firstPart;
    let secondPart;

    if (startOrEnd) {
        firstPart = mainStr.slice(0, findPositionChangeStr);
        secondPart = mainStr.slice(findPositionChangeStr);

        let updateStart = (firstPart.concat(newAddSymbol)).concat(secondPart);
        return updateStart;


    } else {
        let positionForAddSymbol = findPositionChangeStr + str.length;
        firstPart = mainStr.slice(0, positionForAddSymbol);
        secondPart = mainStr.slice(positionForAddSymbol);
        let updateEnd = (firstPart.concat(newAddSymbol)).concat(secondPart);
        return updateEnd;
    };



};

console.log("Задание №3");
var min = 100;
var max = 1000;
var numberOfNumbers = 100; // количество случайно сгенерированных чисел
var arrRezultvalue = [];
var numberOfrepeat = 2; /* количество повторных проверок, это не указано в задании, 
                           но мне кажется вы об этом говорили на уроке   */

arrRezultvalue = repeatcheckProbabilityTheory(numberOfrepeat, numberOfNumbers); // основной запуск

for (let i = 0; i < arrRezultvalue.length; i++) console.log(arrRezultvalue[i], "\n");



function repeatcheckProbabilityTheory(numberOfRepeat, count) {
    let arrRezultvalues = [];

    for (let i = 0; i < numberOfRepeat; i++) {
        arrRezultvalues[i] = checkProbabilityTheory(count);
    }
    return arrRezultvalues;
};



function checkProbabilityTheory(count) {

    let arrRandomValue = [];
    let numberOfAllNumbers = 0;
    let numberOfEvenNumbers = 0;
    let numberOfNonEvenNumbers = 0;
    let percentageOfEvenAndNonEvenNumbers = 0;
    let commonRezult;
    for (let i = 0; i < count; i++) {
        arrRandomValue[i] = getRandomInt(min, max);
        //console.log("рандомное значение ", i, " ", arrRandomValue[i] );
    };
    //console.log("массив",arrRandomValue);
    for (let i = 0; i < arrRandomValue.length; i++) {
        numberOfAllNumbers++;
        if (arrRandomValue[i] % 2 === 0) {
            numberOfEvenNumbers++;
        } else {
            numberOfNonEvenNumbers++;
        };
    };

    //console.log("число повторений ", count, "общее количество чисел ", numberOfAllNumbers, "Четных", numberOfEvenNumbers, "Нечетных", numberOfNonEvenNumbers);

    percentageOfEvenAndNonEvenNumbers = percentageOfEvenAndNonEven(count, numberOfEvenNumbers, numberOfNonEvenNumbers);
    commonRezult = "* Кількість згенерованих чисел: " + numberOfAllNumbers + "\n" + "* Парних чисел: " + numberOfEvenNumbers + "\n" + "* Не парних чисел: " + numberOfNonEvenNumbers + "\n" +
        "* Відсоток парних до не парних: " + percentageOfEvenAndNonEvenNumbers;

    return commonRezult

};

function percentageOfEvenAndNonEven(count, numberOfEven, numberOfNonEven) {
    let calculationPercentageOfEven = numberOfEven * 100 / count;
    let calculationPercentageOfNonEven = numberOfNonEven * 100 / count;
    let percentageOfEvenAndNonEven = calculationPercentageOfEven + "%" + calculationPercentageOfNonEven;

    return percentageOfEvenAndNonEven;

};


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
};