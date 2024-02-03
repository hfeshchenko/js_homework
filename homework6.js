console.log("Домашнее задание 1");
var tall = 5;
var value = '*';
var updateValue = '';
var updateValue2 = '';

console.log("Вариант1");
var triangle = function (side, symbols) {
    for (let i = 0; i < side; i++) {
        updateValue = updateValue + symbols;
        console.log(updateValue);
    }
};

triangle(tall, value);

console.log("Вариант2");
var triangle2 = function (side, symbols) {
    var i = 0;
    do {
        updateValue2 = updateValue2 + symbols;
        console.log(updateValue2);
        i++;
    } while (i < side);

};

triangle2(tall, value);



console.log("Домашнее задание 2");
var sumNumber = 0;
for (let i = 0; i <= 100; i++) {
    if (i % 3 === 0) {
        continue;
    } else {
        //console.log(i, " + ", sumNumber); //Проверка, что все числа, которые должны участвовать в сумме, участвуют
        sumNumber += i;
    }

};
console.log("Итоговая сумма", sumNumber);



console.log("Домашнее задание 3");
var number = 2;
var degree = 3;
var result = 1;

for (let i = 0; i < degree; i++) {
    result = result * number;
};

console.log(number, " в ", degree, " степени = ", result);