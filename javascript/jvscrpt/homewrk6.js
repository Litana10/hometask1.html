// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let block =[];
console.log(block)
block.push(`hello world`)
block.push('lorem ipsum')
block.push('javascript is cool')
console.log(block)

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
let block1 ='hello world';
console.log(block1.toUpperCase('hello world'))
console.log(block1.toUpperCase('lorem ipsum'))
console.log(block1.toUpperCase('javascript is cool'))

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
console.log(block1.toLowerCase('hello world'))
console.log(block1.toLowerCase('lorem ipsum'))
console.log(block1.toLowerCase('javascript is cool'))

// - Є "брудна" стрінга let str = ' dirty string   ' .
// Почистити її від зайвих пробілів.
let str2 = ' dirty string   '
console.log(str2)
console.log(str2.replaceAll(` `, ``))
// let str = ' dirty string   '
// // console.log (str.pop( ` `));
// str.forEach(value=> console.log(str.pop( ` `)))

// - Напишіть функцію stringToarray(str), яка перетворює рядок
// на масив слів.
    let str = 'Ревуть воли як ясла повні';
let  split = str.split(` `)
console.log(split)
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']


// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити
// всі об'єкти в масиві на стрінгові.
let nums = [10,8,-7,55,987,-1011,0,1050,0];

let mapedNums= nums.map(function (value){
    return{...value};
})
console.log(mapedNums)


// - створити функцію sortNums(direction), яка прймає масив чисел,
// та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
let numbs = [11,21,3];
let sort= numbs.sort((a,b)=>{
    return a-b
    });
console.log(sort)

let numbs1=[11,21,3];
let sort1= numbs1.sort((a,b)=> {
    return b - a
});
console.log(sort1)

// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
let sort2= coursesAndDurationArray.sort((c,d)=>{
    return d.monthDuration- c.monthDuration
})
console.log(sort2);
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let filteredCoursesAndDurationArray = coursesAndDurationArray.filter(function(value){
    return value.monthDuration > 5
});
console.log(filteredCoursesAndDurationArray)
// -- за допомоги map перетворити кожен елемент на наступний тип
// {id,title,monthDuration}
let mapedCoursesAndDurationArray=coursesAndDurationArray.map(function(value,index){
    return{...value,id:index-10};
});
console.log(mapedCoursesAndDurationArray);

//     описати колоду карт (від 6 до туза без джокерів)
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
// let arrCards=[];
// arrCards.push(`cardSuit,value,color`);
// console.log(`cardSuit,value,color`)
// let cardSuit=[];
// cardSuit.push('spade', 'diamond','heart', 'clubs')
// console.log(cardSuit);
// let value=[];
// value.push(`'6','7','8','9',10'`)
// let cards= {
//     cardSuit: [ 'spade','diamond', 'heart', 'clubs'],
//     value: ['6','7','8','9','10', 'ace','jack','queen','king','joker'],
//     color: ['red','black']
// }


//
// =========================
//
//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти
//     по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
// =========================
//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
// --написати пошук всіх об'єктів, в який в modules є sass
// --написати пошук всіх об'єктів, в який в modules є docker