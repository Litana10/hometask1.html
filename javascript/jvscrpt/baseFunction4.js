// - створити функцію яка обчислює та повертає площу прямокутника
// зі сторонами а і б
 function square(a,b){
 return a*b;
 }
let sides= square(2,3);
console.log(sides)

// - створити функцію яка обчислює та повертає площу кола з радіусом r
function circle(p,r,q){
 let area= p*r*q;
 return area;
}
// let p=3.14;
// let r= 6;
// let q=2;
let param= circle
console.log(param(3.14,6,2))
// - створити функцію яка обчислює та повертає площу циліндру висотою h,
// та радіутом r
function cylinder(q,p,r,h){
 let volume=q*p*r*h;
 return volume;
}
let metric=cylinder(2,3.14,4,5);
console.log(metric)

// - створити функцію яка приймає масив та виводить кожен його елемент
function showArray(objects){
 for (const item of objects){
  console.log(item);
 }
}
let users = [
 {name: `Zhuzhu`, type: 'Cat', age: 1.5 },
 { name: 'Varna', type: 'Turtle', age: 21 },
 { name: 'Kesha', type: 'Parrot', age: 3 },
 { name: 'Nayda', type: 'Dog', age: 2.5 },
 { name: 'Pufic', type: 'Humster', age: 2.5 },
 { name: 'Randy', type: 'dog', age: 12 },
];

showArray(users);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через
// аргумент всім однаковий
 function writer( text, element) {
  let desc = `<div><p> ${text}
<ul>
<li>${element}</li>
<li>${element}</li>
<li>${element}</li>
</ul>
</p></div>`
  document.write(desc);
 }
 writer( `Lorem ipsum dolor sit
amet, consectetur adipisicing elit. Deserunt ipsam perferendis voluptatem.`,`Lorem ipsum dolor sit amet, 
consectetur adipisicing elit. Nostrum, rem.`)
writer(`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque ea eius rem!`, `list`)

// - створити функцію яка створює ul з трьома елементами li.
// Текст li задати через аргумент всім однаковий. Кількість li визначається
// другим аргументом, який є числовим (тут використовувати цикл)

function  list(points){
  for (let i=0;i<points.length; i++){
   // const point=points[i];

  document.write(`<ul>
<li>${points}</li>
<li>${points}</li>
<li>${points}</li>
</ul>`)
}}
list(`point`)
// - створити функцію яка приймає масив примітивних елементів
// (числа,стрінги,булеві), та будує для них список
function createArray(list){
  for (const item of list){
   console.log(item);
  }
}
let users2=[{name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false}]
 createArray(users2);
// - створити функцію яка приймає масив об'єктів з наступними
// полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.
function array(listArray) {
    for (const member of listArray) {
        console.log(member);
    }
}
    let customers = [
    { id: 11, name: 'Adam', age: 23, group: 'editor' },
    { id: 47, name: 'John', age: 28, group: 'admin' },
    { id: 85, name: 'William', age: 34, group: 'editor' },
    { id: 97, name: 'Oliver', age: 28, group: 'admin' }
]

array(customers);


// - створити функцію яка повертає найменьше число з масиву

function  numbFilter(numbers){
    for (const number of numbers){
        if ( number <= 30) {
            console.log(number)
            //     }else if (number>30){
            //         console.log(``)
            // }
        }
    }}
    let numbers = [1,31,234,32,45]
                  // [56,34,87,2,4],

    numbFilter(numbers)


//
// function  numbFilter(){
//     console.log(arguments)
//     if (arguments <30){
//         return(arguments)
//     }
//
// }
// let numbers = [[1,31,234,32,45]
//               [56,34,87,2,4]],

// numbFilter(numbers)
// - створити функцію sum(arr)яка приймає масив чисел,
// сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
function  sum () {
    let arr = 0;
    for (const sign of arguments) {
        arr = arr + sign;
    }
        return arr;
    }
    console.log(sum(123, 34, 54, 74, 34))

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення
// у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
function  swapArr(arr,index1,index2) {
    const i1 = arr[index1];
    // i1 = arr[0];

    const i2 = arr[index2];
    // const i2 = arr[1];
    arr[index2] = i1;
    arr[index1] = i2;
    return arr;
}
    swapArr([11, 22, 33, 44], 0, 1)




// // let swap = [[11,22,33,44],0,1]
// let arr=[11,22,33,44];
// let index1=0;
// let index2=1
// console.log(swapArr);

//  swapArr (1,11,22,33,44)
// for (let i=swap.length-1;i>=0;i--){
//     const numb=swap[i];}}
// console.log(swapArr)

// - Написати функцію обміну валюти exchange
// (sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],
// 'USD') // => 250
        function exchange(sumUAH, Value) {

            let result = sumUAH / Value


            return result;
        }

    let usdValue = exchange(10000, 40)
    let eurValue = exchange(10000, 42)

console.log (usdValue,eurValue)

//     let currencyValue= sumUAH/40;
// // let EURvalues= sumUAH/42;
// return result
// }
//     let  Value= exchange(10000);
// console.log(Value)


// for  (let key in currencyValues){
//     console.log(key);
//     }
//     let currencyValues= sumUAH/value
// let USDvalue= sumUAH/currencyValues (40);
// let EURvalues= sumUAH/currencyValues(42);
//
// return result}
//     let  sumUAH= exchange(10000);
//     // let currencyValues= [{USDvalue:40},{EURvalue:42}]
// console.log(currencyValues)
// console.log(exchange)

