// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)


function User(id,name, surname , email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}
let users=[
//  new User.push()
     new User(34,`Sade`, `Potapoch`, `sadepotap@gmail.com`,
    `345678908`),
  new User( 12,`asda`,`Chitok`,`asdachitikgmail.com`),
new User(24,`gharak`,`Daser`,`garakdasergmail.com`,`234568098`),
 new User(56,`Nada`,`Farad`,`nadafaradgmail.com`,`21456745`),
 new User(78,`Hirtro`,`Kolaps`,`hirtokolapsgmail.com`,`123457756`),
 new User(123,`dasha`,`Kosach`,`dashakoach`,`54321345`),
 new User(2345,`Peta`,`Risoto`,`petarisotogmail.com`,`212344555`),
 new User(1256,`Hrish`,`Rape`,`hrishrape`,`098776987`),
 new User(3434, `aklas`,`Verto`, `alasverto`,`676767588949`),
 new User(457,`Rosa`,`Wrect`, `rosawrectgmail.com`,`574839040`)
]
console.log(users);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати ,
// залишивши тільки об'єкти з парними id (filter)
console.log(users.filter((user)=>!(user.id^2)));

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
console.log(users.sort((user1,user2)=>user2.id-user1.id));
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order
// (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
//   function Client(id, name, surname , email, phone, order) {
//     Clients.call( this, name, surname , email, phone, order)
//     this.order=order
//
// }
// let Clients=[
//     new Client(34,`Sade`, `Potapoch`, `sadepotap@gmail.com`,
//         `345678908`,[234,123]),
//     new Client( 12,`asda`,`Chitok`,`asdachitikgmail.com`,[234,1,23]),
//     new Client(24,`gharak`,`Daser`,`garakdasergmail.com`,`234568098`,[123]),
//     new Client(56,`Nada`,`Farad`,`nadafaradgmail.com`,`21456745`, [2,3,4,123]),
//     new Client(78,`Hirtro`,`Kolaps`,`hirtokolapsgmail.com`,`123457756`,[12,34]),
//     new Client(123,`dasha`,`Kosach`,`dashakoach`,`54321345`,[35,4,45]),
//     new Client(2345,`Peta`,`Risoto`,`petarisotogmail.com`,`212344555`,[897]),
//     new Client(1256,`Hrish`,`Rape`,`hrishrape`,`098776987`,[657,66]),
//     new Client(3434, `aklas`,`Verto`, `alasverto`,`676767588949`,[85,9,80]),
//     new Client(457,`Rosa`,`Wrect`, `rosawrectgmail.com`,`574839040`,[55,44])
//
// ]
// console.log(Clients)
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

// console.log(Clients.sort(client1, client2)  => client1.order.length-client2.order.length));

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель,
// виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
function  autoCar(model, producer, editYear, maxSpeed, enginVolume){
    this.model=model;
    this.producer=producer;
    this.editYear=editYear;
    this.maxSpeed=maxSpeed;
    this.enginVolume=enginVolume;
    this.drivers=[];

    this.drive=function(){
        return `їдемо зі швидкістю ${this.maxSpeed} на годину`
    }
    this.info= function(){
        console.log(`***INFO***`)
        for (const key in this) {
            if(typeof this[key]==='function')continue;
            console.log(`${key.toUpperCase()}-${JSON.stringify(this[key])}`)
        }
        console.log(`***INFO***`)
    }
  this.increaseMaxSpeed= function (newSpeed){
        const speed = this.maxSpeed+newSpeed;
        if (speed<0) {
            this.maxSpeed = 0
        }else {
            this.maxSpeed = speed;
        }

        }
  this. changeYear=function  changeYear(newValue){
        this.year=newValue;
  }
  this.addDriver=function(name,surname, id){
        if(name.length<2)throw new Error(`Min name length 2 chars`);
        this.drivers.push(new Driver1(name,surname,id));

  }
}
function Driver1(name,surname,id) {
    this.name = name;
    this.surname = surname;
    this.id = id;
}
const car2=new autoCar(`BMW`,`BMW`,2020,360,4.0)
console.log(car2.drive())
car2.info()
car2.increaseMaxSpeed(30)
car2.info()
car2.changeYear(1212)
car2.info()
car2.addDriver(`Feda`,`dolas`,321)
car2.info()


// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник,
// рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів,
// і додає його в поточний об'єкт car


// class Car {
//
//     constructor(model, producer, editYear, maxSpeed, enginVolume) {
//         this.model = model;
//         this.producer = producer;
//         this.editYear = editYear;
//         this.maxSpeed = maxSpeed;
//         this.enginVolume = enginVolume;
//         this.drivers = [name,surname1,id1];
//     }
//
//     drive() {
//         return `їдемо зі швидкістю ${this.maxSpeed} на годину`
//     }
//
//     info() {
//         console.log(`****INFO****`)
//         for (const key in this) {
//             console.log(`${key.toUpperCase()}-${JSON.stringify(this[key])}`)
//         }
//         console.log(`****INFO****`)
//
//     }
//
//     increaseMaxSpeed(newSpeed) {
//         const speed = this.maxSpeed + newSpeed
//         if (speed < 0) {
//             this.maxSpeed = 0;
//         } else {
//             this.maxSpeed = speed;
//         }
//         // this.maxSpeed=speed<0?0:speed;
//     }
//
//     changeYear(newValue) {
//         this.editYear = newValue
//     }
//
//     addDriver(name,surname1,id1) {
//         if (name.length < 2) throw new Error(`min name length 2 chars`)
//         this.drivers.push(new Driver(name,surname1,id1))
//     }
// }
//     class
//     Driver
// {
//     constructor(name,surname1,id1) {
//         this.name=name;
//         this.surname1=surname1;
//         this.id1=id1;
//     }
// }
//
// const car1= new Car(`BMW`, `BMW`, 2020, 350,4.0)
// console.log(car1)
// car1.info()
// car1.increaseMaxSpeed(10)
// car1.info()
// car1.changeYear(1889)
// car1.info()
// car1.addDriver(`adda`,`Toparko`, `1234`)
// car1.info()
// function Cars(model, producer,edityear,maxspeed,enginvolume) {
//       Cars.call( this,model, producer,edityear,maxspeed,enginvolume)
//     this.enginvolume=enginvolume
//
// }

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги.
// Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
class Girls{
    constructor(name,age) {
        this.name=name;
        this.age=age;
    }
}
class Cinderella extends Girls{
    constructor(name,age,size) {
        super(name,age);
        this.size=size;
    }
}
class Prince extends Girls{
    constructor(name,age,boot) {
        super(name,age);
        this.boot=boot;
    }
    findPrincess(arr){
        for (const variant of arr){
            if(variant.size===this.boot){
                return variant
            }
        }
    }
}
const CinderellaArr=[
    new Cinderella(`di `, 29,41),
    new Cinderella(`jade `, 36,42),
    new Cinderella(`adas `, 42,43),
    new Cinderella(`dida`, 25,40),
    new Cinderella(`lela`, 49,46),
];
const  prince= new Prince(`vlad`,65,42);
console.log(prince.findPrincess(CinderellaArr))