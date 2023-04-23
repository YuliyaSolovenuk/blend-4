//! function Constructions
//TODO:=================1=============================
// Виправте помилки, щоб код працював
// const product = {
//     price: 5000,
//     showPrice() {
//         console.log(price)
//     },
// }
// product.showPrice()

//TODO:=================2=============================

//Виправте помилки, щоб код працював
// const product = {
//     price: 5000,
//     showPrice() {
//         console.log(this.price)
//     },
// }

// function callAction(action) {
//     action()
// }

// callAction(product.showPrice)

// Anser:

//TODO:=========task-3=================
//Напиши функцію конструктор User для створення користувача з такими властивостями
//a. userName - ім'я, рядок
//b. age - вік, число
//c. numbersOfPost - кількість постів, число
//d. клас очікує 1 параметр - об'єкт налаштувань з однойменними властивостями

//Додай метод getInfo(), який повертає рядок:
//`Користувачеві ${} ${} років і в нього ${} публікацій.`

// Aswer:

/**
  |============================
  | Розкоментувати ; )
  |============================
*/
// const polly = new User({ userName: 'Polly', age: 30, numbersOfPost: 15 })
// console.log(polly)
// polly.getInfo()

//TODO:=========task-4=================
// Напиши клас конструктор який створювати рядки

// Aswer:

/**
  |============================
  | Розкоментувати ; )
  |============================
*/
// const builder = new StringBuilder('.')
// console.log(builder.getValue()) // '.'
// builder.padStart('^')
// console.log(builder.getValue()) // '^.'
// builder.padEnd('^')
// console.log(builder.getValue()) // '^.^'
// builder.padBoth('=')
// console.log(builder.getValue()) // '=^.^='

// console.log(builder)

//TODO:=========task-5=================
//Напиши функцію конструктор Storage який створює об'єкти
//Для управління складом товарів.
//При виклику отримуватиме один агрумент - початковий масив товарів,
//і записувати їх у властивість items.
//Додай методи класу:
//getItems() - повертайте масив товарів
//addItems(item) - отримує новий товар та додає його до поточних
//removeItem(item) - отримує товар і, якщо він є, видаляє його з поточних

// Aswer:

/**
  |============================
  | Розкоментувати ; )
  |============================
*/
const storage = new Storage(['apple', 'banana', 'mango'])

console.log(storage)
console.log(storage.removeItem('apple'))

//TODO:=========task-6=================
/**
 * Напишіть функію конструктор, яка створіть корабель, який вміє стріляти, і успадкуйте від нього
 * бойовий корабель
 */

// Aswer:

/**
  |============================
  | Розкоментувати ; )
  |============================
*/

// const ws = new WarShip(999, 'US', 100, 'Jack Sparrow', '99$')

// ws.fire()

//! Class
//TODO:=========task-7=================
//Напиши клас Client який створює об'єкт
//з ​​властивостями login email
//Оголоси приватні властивості #login #email,
//доступ до яких зроби через геттер та сеттер login email

// Aswer:

/**
  |============================
  | Розкоментувати ; )
  |============================
*/

// const client = new Client('mango', 'mango@gmail.com')

// client.changeEmail = 'mango555@gmail.com'
// console.log(client.getClientData.email)
// client.changeLogin = '12345'
// console.log(client.getClientData.login)

//TODO:=========task-8=================
//Напиши клас Notes який управляє колекцією нотаток у
//властивості items.
//Нотатка - це об'єкт із властивостями text і priority.
//Додай класу статичний метод Priopity,
//який буде повертати об'єкт із пріоритетами.
//Додай методи addNote(note), removeNote(text)
//updatePriority(text, newPriority)

// Aswer:

/**
  |============================
  | Розкоментувати ; )
  |============================
*/

// const note1 = new Notes()

// note1.addNote({ text: 'Note1', priority: Notes.Priority().LOW })
// note1.addNote({ text: 'Note2', priority: Notes.Priority().LOW })
// console.table(note1.items)

// note1.removeNote('Note1')
// console.table(note1.items)

// note1.updatePriority({ text: 'Note2', newPriority: Notes.Priority().HIGHT })
// console.table(note1.items)

//TODO:=========task-9=================
// Створи клас для калькулятора, який має такі методи:
// метод number, який набуває початкового значення для наступних операцій
// Геттер, який повертає фінальний результат усіх операцій, проведених із числом
// методи add, substruct, divide, multiply
// Об'єкт класу може проводити послідовні операції у вигляді ланцюжка

// Aswer:

/**
  |============================
  | Розкоментувати ; )
  |============================
*/

// const calculator = new Calculator()
// const res = calculator
//     .number(10)
//     .add(10)
//     .divide(2)
//     .multiply(4)
//     .substruct(5).result

// console.log(res)

// const res2 = calculator
//     .number(20)
//     .substruct(40)
//     .multiply(-8)
//     .divide(160)
//     .add(20).result

// console.log(res2)

//TODO:=========task-10=================
// Створити клас Worker, у якого є властивості name, age, salary.
//У класу Worker є метод getSalary.
//Створити клас TopLevelWorker, у якого є властивість hierarchyLevel
//і який успадковує клас Worker, додаючи метод getHierarchyLevel
//Реалізувати завдання за допомогою ES5 прототипів та ES6 класів

const HIERARCHY_LEVEL = {
    TOP: 'top',
    BOTTOM: 'bottom',
}

const workerObj = {
    name: 'Mango',
    surname: 'Worker',
    age: 30,
    position: 'FE developer',
    salary: 5000,
}

ES5

// Aswer:

/**
  |============================
  | Розкоментувати ; )
  |============================
*/

// const worker = new TopLevelWorker(workerObj, HIERARCHY_LEVEL.BOTTOM)
// console.log(worker)
// console.log(worker.getSalary())
// console.log(worker.getHierarchyLevel())

ES6
// Aswer:

/**
  |============================
  | Розкоментувати ; )
  |============================
*/

// const topWorker = new TopLevelWorkerES6(workerObj, HIERARCHY_LEVEL.TOP)
// console.log(topWorker)
// console.log(topWorker.getSalary())
// console.log(topWorker.getHierarchyLevel())

//TODO:==========bonus============
// Створити гру за допомогою класів. Створити class Героя, Створити class гравця, Створити class гри.

// Список Героїв
const HERO_LIST = [
    {
        name: 'thor',
        health: 2000,
        damage: 300,
    },
    {
        name: 'thanos',
        health: 2200,
        damage: 350,
    },
    {
        name: 'hulk',
        health: 2800,
        damage: 400,
    },
]

// Створюємо екземпляр Гравця 1
const player1 = new Player('John')
// Выбираем Героя
player1.selectHero('hulk')

// Створюємо екземпляр Гравця 2
const player2 = new Player('Tom')
// Обираємо Героя
player2.selectHero('thor')

// console.log(player1);
// console.log(player2);

const game = new Game(player1, player2)
// console.log(game);

// game.run() // Кнопка Start!
