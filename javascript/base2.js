<!--Масиви та об'єкти:-->
<!-- - Створити масив, наповнити його 10 елементами-->
<!--будь-якого типу, вивести кожен елемент в консоль-->
let arr1 = [
    [`lisa`, 2346, `fgghj`, true, NaN, undefined],
    [`kola`, 3445,`hhjgj`, false],
    [`liya`,65656,`jjfkk`,true],
    [`kavin`,74757, `fhgjgk`,false]

]
console.log(arr1);
//
// <!-- - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.-->
// <!-- - Створити 3 об'єкти які описують книги.--><!--Поля об'єкту : title ,pageCount, genre, authors.
// Поле "автори" - являється  масивом. Кожен автор має поля name та age.-->
//

let shelf1={ title: `Robinson`,pages: 200, genre: `adventure`}
 let shelf2={title:`voin`,    pages: 145, genre: `history`}
let shelf3={ title: `Ona`,    pages: 235,  genre: `roman`}

console.log(shelf1, shelf2, shelf3)
    console.log(typeof shelf1)

let shelf4= {title: `Robinson`,pages: 200 ,genre:`adventure` ,authors: [ {name:`Segio` ,surname: `Mongo`,
    age: 36 }]}
let shelf5= {title:`Voin`, pages: 145, genre:`history`, authors: [ {name: `Romeo`, surname: `Kazav` , age: 76} ]}
let shelf6= {title:`Ona`, pages:235, genre:` roman`,authors: [ {name:`Amily`, surname: `Cosov`, age:36} ]}
console.log(shelf4, shelf5, shelf6)

// <!-- - Створити масив з 10 об'єктами які описують сутніть "користувач".-->
// <!--Поля: name, username,password. Вивести в консоль пароль кожного користувача-->
//
// let users;
let users = [{name: 'Leanne Graham', username: 'Bret', password: `topyop`},
            {name: 'Mrs. Dennis Schulist', username: 'Leopoldo_Corkery', password: 'Karley_Dach@jasper.info' },
            { name: 'Kurtis Weissnat', username: 'Elwyn.Skiles', password: 'Telly.Hoeger@billy.biz'},
            { name: 'Nicholas Runolfsdottir V', username: 'Maxime_Nienow', password: 'Sherwood@rosamond.me'},
            {name: 'Glenna Reichert', username: 'Delphine', password: 'Chaim_McDermott@dana.io'},
            { name: 'Clementina DuBuque', username: 'Moriah.Stanton', password: 'Rey.Padberg@karina.biz'},
            { name: 'Leanne Graham', username: 'Bret', password: 'Sincere@april.biz'},
            { name: 'Ervin Howell', username: 'Antonette', password: 'Shanna@melissa.tv'},
            {name: 'Clementine Bauch', username: 'Samantha', password: 'Nathan@yesenia.net'},
            { name: 'Patricia Lebsack', username: 'Karianne', password: 'Julianne.OConner@kory.org'}]
console.log(users)
console.log(users[0].password)
console.log(users[1].password)
console.log(users[2].password)
console.log(users[3].password)
console.log(users[4].password)
// //
// // <!--Логічні розгалуження:-->
// // <!-- - Є змінна х, якій ви надаєте довільне числове значення.-->
// // <!--Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'.-->

let x= prompt (`enter a number`);
if (x !== 0){
    console.log(true)}
else{console.log(false)

}

// // <!--Перевірте  скрипт при a, що дорівнює 1, 0, -3-->
let a =prompt(` Find a number`);
if(a==0){
    console.log(true)}
else {
    console.log(false)
}
 if(a==1){
        console.log(true)}
    else{console.log(false)
    }
    if(a ==-3){
        console.log(true)}
    else{console.log(false)
}
// // <!-- - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить,-->
// // <!--до якої четверті години попадає число-->
// // <!--(в першу, другу, третю или четверту частину години).-->

let time = prompt ("what time is it?");
    if (time === 14){
        console.log(`1st quater`)
    }
    else if (time<=13){
        console.log(`false`);
    }else if(13>=18){
        console.log(`false`)
    }else if (18>=21) {
        console.log(`false`);
    }
    else if (21>=24){
        console.log(`false`);
    }
// // <!-- - У змінній day дано якесь число від 1 до 31. Потрібно визначити,-->
// // <!--у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).-->

let day= prompt(`what da is it today?`);
    if (day === 28) {
        console.log(`true`);
    }else if(day>=10){
        console.log(`false decade`);
    }else if(10>=20){
        console.log(`false decade`)
    } if(20>=27) {
        if(confirm(`what is exactly day?`)){
            console.log (`true decade`);
        }if(29>=31){
            if(confirm(`what is exactly day`)){
                console.log(`true decade`)
            }
    }
    }
    // чому не спрацьовує confirm



        // } else {
        //     (day === 28)
        //     console.log(`true`);
        // }}}


//         }if(confirm(`what is exactly day?`))
// {console.log(`continue`);
// }else if (day==28){
//         console.log(`true`)


// // <!-- - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий-->
// // <!--номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна-->
// // <!--замість плану на день, назву дня англійською).-->
let week= prompt(`what is a number of the day of week?` );
    switch (week){
        case `1`:
        console.log(`Monday`);
        break;
        case `2`:
            console.log(`Tuesday`);
        break;
        case `3`:
            console.log(`Wednesday`);
            break;
        case `4`:
            console.log(`Thursday`);
            break;
        case `5`:
            console.log(`Friday`);
            break;
        case `6`:
            console.log(`Saturday`);
            break;
        case `7`:
            console.log(`Sunday`);
        break;
        case `!!!`:
            console.log(`!!!`);
            break
    }

// // <!-- - Користувач вводить або має два числа.-->
// // <!--Потрібно знайти та вивести максимальне число з тих двох .-->
// // <!--Також потрібно врахувати коли введені рівні числа.-->
let k =+prompt(`enter 1st number`);
    let y =+prompt(`enter 2nd number`)
    if (y > k) {
        console.log(y);
    } else if (k === y) {
        console.log(`equal`);
    } else {
        console.log(k)

}

// //
// // <!-- - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined,-->
// // <!--null  і тд включно). Напишіть код який,-->
// // <!--за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення-->
// // <!--змінної х являється falsy (хибноподібні, тобто приводиться до false)-->
// //
let  x1 = null
x1>0 || console.log(`falsy`)

// let x2= 0
// let x2= false || true;
    console.log(null||undefined||false)

// //
// // <!-- - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray.-->
// // <!--За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо-->
// // <!--тривалість довша за 5 місяців вивести в консоль "Супер".-->

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
 console.log(coursesAndDurationArray)
 let monthDuration = +prompt(`how long do you study?`);
if (monthDuration === 6){
    console.log(`Super`);
}else if(monthDuration>6){
    console.log(`Super`);
}else if (monthDuration<6){
    console.log(`Not enough`)
}
