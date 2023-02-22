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
// let filteredCardsArray = cards.filter(function(mean){
//     if ( cardSuit= spade){}
//     return spade;
//
// });
// console.log(filteredCardsArray)
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
let cards =[
            { cardSuit:'spade', value: 6, color: 'red'},
            { cardSuit:'spade', value: 7, color: 'red'},
            { cardSuit:'spade',value: 8, color: 'red'},
            { cardSuit:'spade',value: 9, color: 'red'},
            { cardSuit:'spade',value: 10, color: 'red'},
            { cardSuit:'spade',value: 'jack',color: 'red'},
{ cardSuit: 'spade',value: 'queen', color: 'red'},
{ cardSuit: 'spade',value: 'king', color: 'red'},
{ cardSuit: 'spade',value: 'ace', color: 'red'},
{ cardSuit: 'spade',value: 'joker', color: 'red'},

    { cardSuit:'diamond', value: '6', color: 'red'},
{ cardSuit: 'diamond', value: '7', color: 'red'},
{ cardSuit: 'diamond',value: '8', color: 'red'},
{ cardSuit: 'diamond',value: '9', color: 'red'},
{ cardSuit: 'diamond',value: '10', color: 'red'},
{ cardSuit: 'diamond',value: 'jack', color: 'red'},
{ cardSuit: 'diamond',value: 'queen', color: 'red'},
{ cardSuit: 'diamond',value: 'king', color: 'red'},
{ cardSuit: 'diamond',value: 'ace', color: 'red'},
{ cardSuit: 'diamond',value: 'joker', color: 'red'},

    { cardSuit:'heart', value: '6', color: 'red'},
{ cardSuit: 'heart', value: '7', color: 'red'},
{ cardSuit: 'heart',value: '8', color: 'red'},
{ cardSuit: 'heart',value: '9', color: 'red'},
{ cardSuit: 'heart',value: '10', color: 'red'},
{ cardSuit: 'heart',value: 'jack', color: 'red'},
{ cardSuit: 'heart',value: 'queen', color: 'red'},
{ cardSuit: 'heart',value: 'king', color: 'red'},
{ cardSuit: 'heart',value: 'ace', color: 'red'},
{ cardSuit: 'heart',value: 'joker', color: 'red'},

    { cardSuit: 'club',value: '6', color: 'red'},
{ cardSuit: 'club',value: '7', color: 'red'},
{ cardSuit: 'club',value: '8', color: 'red'},
{ cardSuit: 'club',value: '9', color: 'red'},
{ cardSuit: 'club',value: '10', color: 'red'},
{ cardSuit: 'club',value: 'jack', color: 'red'},
{ cardSuit: 'club',value: 'queen', color: 'red'},
{ cardSuit: 'club',value: 'king', color: 'red'},
{ cardSuit: 'club',value: 'ace', color: 'red'},
{ cardSuit: 'club',value: 'joker', color: 'red'},

{ cardSuit:'spade', value: '6', color: 'black'},
{ cardSuit: 'spade', value: '7', color: 'black'},
{ cardSuit: 'spade',value: '8', color: 'black'},
{ cardSuit: 'spade',value: '9', color: 'black'},
{ cardSuit: 'spade',value: '10', color: 'black'},
    { cardSuit: 'spade',value: 'jack', color: 'black'},
{ cardSuit: 'spade',value: 'queen', color: 'black'},
{ cardSuit: 'spade',value: 'king', color: 'black'},
{ cardSuit: 'spade',value: 'ace', color: 'black'},
{ cardSuit: 'spade',value: 'joker', color: 'black'},


    { cardSuit:'diamond', value: '6', color: 'black'},
{ cardSuit: 'diamond', value: '7', color: 'black'},
{ cardSuit: 'diamond',value: '8', color: 'black'},
{ cardSuit: 'diamond',value: '9', color: 'black'},
{ cardSuit: 'diamond',value: '10', color: 'black'},
{ cardSuit: 'diamond',value: 'jack', color: 'black'},
{ cardSuit: 'diamond',value: 'queen', color: 'black'},
{ cardSuit: 'diamond',value: 'king', color: 'black'},
{ cardSuit: 'diamond',value: 'ace', color: 'black'},
{ cardSuit: 'diamond',value: 'joker', color: 'black'},

    { cardSuit:'heart', value: '6', color: 'black'},
{ cardSuit: 'heart', value: '7', color: 'black'},
{ cardSuit: 'heart',value: '8', color: 'black'},
{ cardSuit: 'heart',value: '9', color: 'black'},
{ cardSuit: 'heart',value: '10', color: 'black'},
{ cardSuit: 'heart',value: 'jack', color: 'black'},
{ cardSuit: 'heart',value: 'queen', color: 'black'},
{ cardSuit: 'heart',value: 'king', color: 'black'},
{ cardSuit: 'heart',value: 'ace', color: 'black'},
{ cardSuit: 'heart',value: 'joker', color: 'black'},

    { cardSuit: 'club', value: 6, color: 'black'},
{ cardSuit: 'club', value: 7, color: 'black'},
{ cardSuit: 'club',value: 8, color: 'black'},
{ cardSuit: 'club',value: 9, color: 'black'},
{ cardSuit: 'club',value: 10, color: 'black'},
{ cardSuit: 'club',value: 'jack', color: 'black'},
{ cardSuit: 'club',value: 'queen', color: 'black'},
{ cardSuit: 'club',value: 'king', color: 'black'},
{ cardSuit: 'club',value: 'ace', color: 'black'},
{ cardSuit: 'club',value: 'joker', color: 'black'}
]
console.log(cards.find((card)=> card.cardSuit==='spade'&& card.value === 'ace'))
console.log(cards. filter((card)=>card.value=== 6))
console.log(cards.filter((card)=>card.color==='red'))
console.log(cards.filter((card)=>card.cardSuit==='diamond'))
console.log(cards.filter((card)=>card.cardSuit==='club'&& card.value>=9))
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
let cards1 =[
    { cardSuit: 'club',value: 'queen', color: 'black'},
    { cardSuit: 'club',value: 'king', color: 'black'},
    { cardSuit:'spade',value: 'jack',color: 'red'},
    { cardSuit: 'spade',value: 'queen', color: 'red'},
    { cardSuit: 'spade',value: 'king', color: 'red'},
    { cardSuit: 'spade',value: 'ace', color: 'red'},
    { cardSuit: 'spade',value: 'joker', color: 'red'},
    { cardSuit: 'diamond',value: 'ace', color: 'black'},
    { cardSuit: 'diamond',value: 'joker', color: 'black'},
    { cardSuit: 'heart',value: 'queen', color: 'red'},
    { cardSuit: 'heart',value: 'king', color: 'red'}];
// console.log(cards1.reduce((accumulator,value)=>{
//     if (cardSuit = 'club') {
//         accumulator.club.push(value);
//         if (cardSuit = 'spade') {
//             accumulator.spade.push(value);
//             if (cardSuit = 'heart') {
//                 accumulator.heart.push(value)}
//                 if (cardSuit = 'diamond') {
//                     accumulator.diamond.push(value);
//                 }
//                 return accumulator}
//
//                 { club: [];spade:[];diamond:[];heart:[]}
//
//
//         // let cardSuit=reduce.club
//         console.log(cardSuit);}}))

    const obj = cards.reduce((accumulator, value)=>{
    accumulator[value.cardSuit].push(value);
    return accumulator
    },{ club:[], spade:[], diamond:[], heart:[] })

console.log(obj)

// =========================
//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
// --написати пошук всіх об'єктів, в який в modules є sass
// --написати пошук всіх об'єктів, в який в modules є docker
let courses = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js'],
        logo: '',
        price: 0,
        rating: 5,
        avgResult: 99
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced'],
        logo: '',
        price: 0,
        rating: 4.998,
        avgResult: 97
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'python core',
            'python advanced'],
        logo: '',
        price: 0,
        rating: 4.812,
        avgResult: 98
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'QA/QC'],
        logo: '',
        price: 0,
        rating: 4.65,
        avgResult: 97
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java'],
        logo: '',
        price: 0,
        rating: 4.772,
        avgResult: 100
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass'],
        logo: '',
        price: 0,
        rating: 4.53,
        avgResult: 90
    }
];
console.log(courses. filter((item)=>item.modules.includes('sass')));
console.log(courses.filter((item)=>item.modules.includes('docker')));