
console.log("Домашнее задание 1");
var arr = [10, 20, 30, 40, 50, 60, 70, 80, 90];

const lengthArr = arr.length;
var checkvalue;
var randomValue = 0;
var arrNew = new Array();

console.log("старый массив", arr);
myBlend(arr);
console.log("перемешанный  массив", arr)

function myBlend(arr) {
  var temporaryValues = new Array(lengthArr);
  let temporaryValue = 0;
  let temporaryValueForArr=0;

  getNewPosition(0, lengthArr);

  for (let i = 0; i < arrNew.length; i++) {
    //console.log("arrNew[i]", i, arrNew[i]);
    temporaryValue = arrNew[i];
    temporaryValues[i] = arr[temporaryValue];
    //console.log("arr[i]", i, arr[i]);
  }
   // console.log("Новый массив" + temporaryValues);
   for(let i =0; i<temporaryValues.length; i++) arr[i]=temporaryValues[i];
   
};


function getNewPosition(min, max) {

  if (arrNew.length === max) return;

  randomValue = getRandomIntInclusive(min, max);
  checkvalue = checkNewValue(randomValue)
  if (checkvalue === false) {
    arrNew.push(randomValue);
    getNewPosition(min, max);
  }
  else {
    getNewPosition(min, max);

  }
};



function checkNewValue(randomValue) {
  if (arrNew.length == 0) return false;
  for (var i = 0; i < arrNew.length; i++) {

    if (arrNew[i] === randomValue) {
      return true;
    }
  }
  return false;
};


function getRandomIntInclusive(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  let newPosition = Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
  //console.log("Сгенерированое число", newPosition);
  return newPosition;
}

console.log("Домашнее задание 2");

const company = {
  name: 'Велика Компанія',
  type: 'Головна компанія',
  platform: 'Платформа для продажу квитків',
  sellsSolution: 'Рішення для продажу квитків',
  clients: [
    {
      name: 'Клієнт 1',
      type: 'subCompany',
      uses: 'ПО для продажу квитків',
      sells: 'Рішення для продажу квитків',
      partners: [
        {
          name: 'Клієнт 1.1',
          type: 'subSubCompany',
          uses: 'Рішення для продажу квитків',
          sells: 'Рішення для продажу квитків',
        },
        {
          name: 'Клієнт 1.2',
          type: 'subSubCompany',
          uses: 'Рішення для продажу квитків',
          sells: 'Рішення для продажу квитків',
          partners: [
            {
              name: 'Клієнт 1.2.3',
              type: 'subSubCompany',
              uses: 'Рішення для продажу квитків',
              sells: 'Рішення для продажу квитків',
            }
          ]
        }
      ]
    },
    {
      name: 'Клієнт 2',
      type: 'subCompany',
      uses: 'ПО для продажу квитків',
      sells: 'Рішення для продажу квитків'
    }
  ]
};


let firstClient = findClientByName("Клієнт 1");
let lastClient = { depth: 0 };


findValueByKey(firstClient, 0);
delete lastClient.depth;
console.log(lastClient);


function findClientByName(name) {
  const clients = company.clients;
  for (const c of clients) {
    if (c.name === name) {
      return c;
    }
  }
};
function findValueByKey(client, depth) {
  if (client.hasOwnProperty('partners')) {
    for (const c of client.partners) {
      findValueByKey(c, depth + 1);
    }
  } else {
    if (lastClient.depth < depth) {
      lastClient = client;
      lastClient.depth = depth;
    }
  }
}