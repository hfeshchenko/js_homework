

console.log("ДЗ1  вариант 1");
const monthlyExpenses = {
    food: 400,
    car: "I don't know",
    clothes: "More than a lot"
};

function getinfo(object){
    for (let key in monthlyExpenses) {
        console.log(key + ":" + object[key]);
    }
};
getinfo(monthlyExpenses);
monthlyExpenses.phone = 1000;
console.log("Выводим обьект с новым значением");
getinfo(monthlyExpenses);
console.log(" ");
console.log(" ");
console.log(" ");


console.log("ДЗ1  вариант 2");
const monthlyExpenses2 = {
    food: 400,
    car: "I don't know",
    clothes: "More than a lot",
    getAllInfo(){
        for (let key in this) {
            if(key === "getAllInfo") continue;
            console.log(key + ":" + this[key]);
    }
}
};

monthlyExpenses2.getAllInfo();
monthlyExpenses2.phone = 1000;
console.log("Выводим обьект с новым значением");
monthlyExpenses2.getAllInfo();
console.log(" ");
console.log(" ");
console.log(" ");

console.log("ДЗ2");

var yourPrice;
var yourMinPrice;
var yourMaxPrice;


var services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "миття голови": "100 грн",

    price() {
        let commonPrice = 0;
        let findValue = Object.values(this);
        //console.log(findValue);
        for (let i = 0; i < findValue.length; i++) {
            if (isNaN(Number.parseFloat(findValue[i]))) continue;
            findValue[i] = Number.parseFloat(findValue[i]);
            commonPrice += findValue[i];
        }
        //console.log(findValue);
        commonPrice = commonPrice.toFixed(2);
        return commonPrice;

    },

    priceMin() {
        let commonPrice = 0;
        let findValue = Object.values(this);
        //console.log(findValue);
        for (let i = 0; i <= findValue.length; i++) {
            if (isNaN(Number.parseFloat(findValue[i]))) continue;
            findValue[i] = Number.parseFloat(findValue[i]);

            if (i === 0) commonPrice = findValue[i];
            if (findValue[i] < commonPrice) {

                commonPrice = findValue[i];
            }

        };
        commonPrice = commonPrice.toFixed(2);
        return commonPrice;
    },

    priceMax() {
        let commonPrice = 0;
        let findValue = Object.values(this);
        //console.log(findValue);
        for (let i = 0; i <= findValue.length; i++) {
            if (isNaN(Number.parseFloat(findValue[i]))) continue;
            findValue[i] = Number.parseFloat(findValue[i]);

            //console.log("i" + i + "commonPrice " + commonPrice + "findValue[i]" + findValue[i]);

            if (i === 0) commonPrice = findValue[i];
            if (findValue[i] > commonPrice) {
                //console.log("test"+"i" + i + "commonPrice " + commonPrice + "findValue[i]" + findValue[i]);

                commonPrice = findValue[i];

            }
        };
        commonPrice = commonPrice.toFixed(2);
        return commonPrice;
    }
};
yourPrice = services.price();
yourMinPrice = services.priceMin();
yourMaxPrice = services.priceMax();
console.log("Общая сумма 'наданих послуг': " + yourPrice + "; " + "Минимальная цена: " + yourMinPrice + "; " + "Максимальная цена: " + "; " + yourMaxPrice + ";");
services['Розбити скло'] = "200 грн";
yourPrice = services.price();
yourMinPrice = services.priceMin();
yourMaxPrice = services.priceMax();
console.log("Общая сумма 'наданих послуг': " + yourPrice + "; " + "Минимальная цена: " + yourMinPrice + "; " + "Максимальная цена: " + "; " + yourMaxPrice + ";");