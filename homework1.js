//Пример №1
var result1 = 'number' + 3 + 3;
console.log(result1);
console.log(typeof result1);
/* результат "number33"
Так как мы имеем только один вид арифметический действий, вычисление проиводиться по порядку.
Первое действие 'number' + 3 содержит тип данных String и Number происходит конкатенация и получаем number3.
Так как  number3 является String, то number3 + 3 содержит тип данных String и Number происходит конкатенация и получаем number33*/

//Пример №2
var result2 = null + 3;
console.log(result2);
console.log(typeof result2);
/* результат 3 
При арифметиченских вычислениях тип данных Null преобразуется в Number со значением 0, 0+3
Как результат получаем 3 с типом  данных Number*/

//Пример №3
var result3 = 5 && "qwerty";
console.log(result3);
console.log(typeof result3);
/* результат "qwerty" string
Для оператора && действует правило, если все сравниваемые значения можно преобразовать в true,
то возвращаем последнее значение операнда, тоесть "qwerty"
*/

//Пример №4
var result4 = +'40' + +'2' + "hillel";
console.log(result4);
console.log(typeof result4);
/*результат "42hillel"
'40' и '2' тип данных  String, но унарный + перед этими значениями преобразуют из в тип данных Number
Первое действие 40+2=42 с типом данных Number. 
Второе действие Number + String  42 +  "hillel" происходит конкатенация и получаем 42hillel c типом данных String*/

//Пример №5
var result5 = '10' - 5 === 6;
console.log(result5);
console.log(typeof result5);
/* результат false
Первое действие  String - Number, JS всегда пытается произвести вычисления, если это возможно.
Поэтому  '10' преобразуется в 10 с типом данных Number и производится вычисление 10-5=5 
Далее происходит сравнение 5 не равно 6, поэтому получаем Boolean  false*/

//Пример №6
var result6 = true + false;
console.log(result6);
console.log(typeof result6);
/* результат 1 
JS всегда пытается произвести вычисления, если это возможно.
Первое действие преобразование boolean true и false в тип данных Number,
где true = 1 false = 0
Полечается 1+0=1 с типом данных number*/

//Пример №7
var result7 = '4px' - 3;
console.log(result7);
console.log(typeof result7);
/* Результат NaN 
JS всегда пытается произвести вычисления, если это возможно.
В этом случае '4px' не получилось перевести в Number из-за чего не возможно произвести
вычисление,  */

//Пример №8
var result8 = '4' - 3;
console.log(result8);
console.log(typeof result8);
/* Результат 1
JS всегда пытается произвести вычисления, если это возможно.
String '4' преобразовуется в Number 4
и дальше происходит вычисление 4-3= 1 с типом данных Number*/

//Пример №9
var result9 = '6' + 3 ** 0;
console.log(result9);
console.log(typeof result9);
/*Результат "61"
Первое действие по иерархии приоритетов возведение в степень 3 в нулевой
степнни = 1.
Далее String + Number происходит конкатенация, следовательно 
'6' + 1 = "61" String*/

//Пример №10
var result10 = 12 / '6';
console.log(result10);
console.log(typeof result10);
/*результат 2
JS всегда пытается произвести вычисления, если это возможно.
String '6' преобразовуется в number 6 и производится деление.*/

//Пример №11
var result11 = '10' + (5 === 6);
console.log(result11);
console.log(typeof result11);
/* результат "10false"
Первое действие в скобках, согласно иерархии выполнения.
5 не равно 6 получаем boolean false
При string + boolean происходит конкатенация, получаем
'10' + false= '10false' string*/

//Пример №12
var result12 = null == '';
console.log(result12);
console.log(typeof result12);
/* результат false
При сравлении '' преобразовуется в number 0. Тоесть null==0
Для значений undefined и null действует особое правило: эти значения ни к чему не приводятся, они равны друг другу и не равны ничему другому.
Поєтому null==0 false.
Но нужно помнить, что для null >= 0 это будет  true*/


//Пример №13
var result13 = 3 ** (9 / 3);
console.log(result13);
console.log(typeof result13);
/*результат 27
Согласно иерархии выполнение, первое действие в скобках 9/3=3 number.
Далее 3 возвести в степень 3 = 27 number*/

//Пример №14
var result14 = !!'false' == !!'true';
console.log(result14);
console.log(typeof result14);
/* true boolean
'false' и 'true' это string. Eсли к любой string поставить ! (не) мы получим !'12в1ы21ав'= false boolean.
Если поставим два !! то получим  !!'12в1ы21ав'=!false=true
!!'false' == !!'true'
!false == !false
true == true это верное равенство получаем true boolean.*/

//Пример №15
var result15 = 0 || '0' && 1;
console.log(result15);
console.log(typeof result15);
/*результат 1 с типом number
Первое действие по приоритету &&
'0' && 1 тут все значения можно преобразовать в true, значит возвращается значение
последнего операнда, тоесть 1 number.
0||1  тут принцип если первое значение можно преобразовать в true, возвращаем первое,
в противном случае возвращаем второе. в нашем примере мы первое значение не можем преобразовать в true
значит возвращаем второе, тоесть 1 number
*/ 

//Пример №16
var result16 = (+null == false) < 1;
console.log(result16);
console.log(typeof result16);
/* результат  false boolean
Первые действия делаются в скоюках. Благодаря унарному +  +null преобразовуется в 0.
false так как его сравнивают с number, также преобразовуется в 0. В итоге +null == false получаем true boolean.
true < 1 так как boolean сравнивают с числом, true преобразовываем в 1. 
1 не меньше 1 получаем false boolean*/

//Пример №17
var result17 = false && true || true;
console.log(result17);
console.log(typeof result17);
/* результат true boolean
Первое действие &&. false && true возвращаем первое встречное ложное (false) значение, тоесть возвращаем false.
Теперь false || true если первое значение не true, возвращаем второе, тоесть true boolean.*/

//Пример №18
var result18 = false && (false || true);
console.log(result18);
console.log(typeof result18);
/* результат false boolean
Первое действие делается в скобках false || true, если первое не true возвращаем второе, тоесть возвращаем true.
Далее false && true, возвращаем первое встречное ложное (false) значение, тоесть возвращаем false.
*/

//Пример №19
var result19 = (+null == false) < 1 ** 5;
console.log(result19);
console.log(typeof result19);


















