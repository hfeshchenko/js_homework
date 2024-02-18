
console.log("Домашнее задание 1");
var str ="sssAfdabhgcfsdf";
console.log(str.match(/[^aA]{6}/i));

console.log("Домашнее задание 2");
var arr = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.porohov@yahoo.com"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru" // Нам такі не підходять
    }
];


var checkValue;
var arrEmail = [];

for(let i=0;i<arr.length;i++){
let regexp =  /\w+\.*\w+@gmail|@yahoo\.com$/
checkValue = regexp.test(arr[i].email);
if(checkValue) arrEmail.push(arr[i].email);
   
}
console.log("Массив с email", arrEmail);


