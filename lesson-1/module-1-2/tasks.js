//TODO: 1 ===================================
// Якщо змінна a дорівнює 10, виведіть 'Вірно', інакше виведіть 'Невірно'.

// const a = 9;
// if (a === 10) {
//     console.log("Вірно");

// } else {
//     console.log("Не вірно");
// }

// const a = 10;
// a === 10 ? console.log("Вірно") : console.log("Не вірно");

//TODO: 2 ===================================
// У змінній min лежить число від 0 до 59. Визначте у котру чверть години
// Попадає це число (у першу, другу, третю або четверту).

// const min = 61;

// if (min >= 0 && min <= 15) {
// console.log("Перша чверть");
// } else if (min > 15 && min <= 30) {
//     console.log("Друга чверть")
// } else if (min > 30 && min <= 45) {
//     console.log("Третя чверть")
// } else if (min > 45 && min <= 60) {
//     console.log("Четверта чверть")
// } else {
//     console.log("Невірна частина")
// }


//TODO: 3 ===================================
// Змінна num може набувати 4 значення: 1, 2, 3 або 4. Якщо вона має
// значення '1', то у змінну result запишемо 'зима', якщо має значення
// '2' - 'весна' і так далі. Розв'яжіть завдання через switch-case.

// const num = 5;
// let result = "";

// switch (num) {

//     case 1:
//       result = "зима"; 
//       break; 

//     case 2:
//       result = "весна";
//       break;  
    
//     case 3:
//     result = "літо";
//     break; 

//     case 4:
//       result = "осінь";
//       break; 
    
//     default:
//          result = "такої пори року не існує"
// }
//  console.log(result)


//TODO: 4 ===================================
// скористаємося циклом while та виведіть у консоль числа від 0 до 50
// let counter = 0;
// while (counter <= 50) {
//   console.log(counter);
//   counter += 1;
// }

//TODO: 5 ===================================
//Використовуючи конструкцію if...else,
//напишіть код, який запитуватиме:
//"Яка офіційна назва JavaScript?"
//Якщо користувач вводить "ECMAScript",
// показати через alert: "Вірно!"
//інакше відобразити: "Не знаєте? ECMAScript!"

// const question = prompt("Яка «офіційна» назва JavaScript?").toLocaleLowerCase();
// if (question === "ecmascript") {
//   alert("Вірно");
// } else {
//   alert("Не знаєте? ECMAScript!");
// }

//TODO: 6 ===================================
// Напишіть програму, яка отримає від користувача
//число (кількість хвилин) і виведе у консоль
//рядок у форматі годин і хвилин
//70 === 01:10
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
// const globalMinutes = 70;
// const minutes = String(globalMinutes % 60).padStart(2, 0);
// const hours = String(Math.floor(globalMinutes / 60)).padStart(2, 0);
// console.log(minutes);
// console.log(hours);
// console.log(`${hours}:${minutes}`);

//TODO: 7 ===================================
//Напишіть цикл, який виводить у консоль
// числа від max до min за спаданням
// Додайте усі парні числа від min до max

//TODO: 8 ===================================
//Напишіть код, який запитуватиме
//логін за допомогою prompt і логувати результат
//в консоль браузера

//Якщо відвідувач вводить "Адмін",
//то prompt запитує пароль.
//Якщо нічого не ввели або натиснута клавіша відміна
//Вивести рядок "Я вас не знаю"

//Пароль перевіряти так:
//Якщо введено пароль "Я головний",
//то вивести рядок "Добрий день!"
// Якщо відвідувач натиснув відміна виводити рядок 'скасовано'
//інакше виводити рядок "Невірний пароль!"

// const loginInput = prompt('Введіть свій логін');

//TODO: 9 ===================================
// Напишіть цикл, який пропонує ввести
// число більше 100 через prompt.
// Якщо відвідувач ввів інше число - попросити
// ввести ще раз і так далі.
// Цикл має питати число, поки відвідувач не
// введе число більше 100, або натисне кнопку
// скасування в prompt

//TODO: 10 ===================================
//Даний рядок, що складається із символів, наприклад, 'abcde'.
// Перевірте, що першим символом цього рядка є буква 'a'.
// Якщо це так - виведіть 'так', інакше виведіть 'ні'.

// const str = 'abcde';

// ! Arrays and function
//TODO: 11 ===================================
// Написати ф-цію, яка створює масив із зазначеною довжиною та наповнює його переданим значенням
// приклад: ф-ція fillArray(3, 'a') повинна повертати масив ['a', 'a', 'a']

//TODO: 12 ===================================
// Написати ф-цію, яка прибиратиме з масиву всі значення, які перетворюються на false
// undefined, null, false, '', 0, NaN

// const array = [
//   1,
//   0,
//   54,
//   'doc',
//   null,
//   'jpg',
//   undefined,
//   '',
//   'png',
//   'exe',
//   false,
//   'mp4',
//   NaN,
//   'hbs',
// ];

//TODO: 13 ===================================
// Перевірити два масиву і дізнатися, чи вони рівні

// const arr1 = [1, 4, 6, 'color', 324, 232, 'list', 11, 9, 'dream', 34, 0, -30];
// const arr2 = [6, 'dream', -30, 11, 9, 1, 324, 34, 'color', 4, 232, 0, 'list'];

// const arr3 = [4, 232, 6, -30, 'color', 324, 'list', 1, 11, 9, 'dream', 34, 0];
// const arr4 = ['color', 6, -30, 11, 9, 1, 'dream', 324, 34, 4, 232, 0, 'list'];

// const arr5 = [1, 4, 6, 'color', 'list', 11, 9, 'dream', 34, 0, -30, 'lesson'];
// const arr6 = [6, 324, 'dream', -30, 9, 8, 34, 'color', 4, 232, 0, 'list', 11];

// const arr7 = [1, 4, 6, 'color', 324, 232, 'list', 11, 9, 'dream', 34, 0, -30];
// const arr8 = [6, 'dream', -30, 10, 9, 1, 324, 34, 'color', 4, 232, 0, 'list'];

// !
//TODO: 14 ===================================
//Напиши функцію findSmallerNumber(numbers)
//яка шукає найменше число в масиві.
//Додай перевірку що функція отримує масив
// const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3];

//? Answer

//?

// const smallestNumber = findSmallerNumber(numbers);
// console.log(smallestNumber); // 2

//TODO: 15 ===================================
//Напишіть функцію caclculateAverage()
//яка приймає довільну кількість
//аргументів і повертає їхнє середнє значення.
//Додати перевірку, що аргументи це числа.

// console.log(calculateAverage(10, 10, 20, 200)); // 60

//TODO: 16 ===================================
// Напишіть функцію min(a, b), яка повертає
// менше з чисел a, b
// Потрібно додати перевірку, що функція отримує числа

//? Answer

//?

// const result = min(10, 5);
// console.log(result); // 5

//TODO: 17 ===================================
// напиши функцію яка сумуватиме сусідні числа і пушити в новий масив
// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];
function sumAdjacentNumbers(someArr) {
let result = [];

for (let i = 0; i < someArr.length - 1; i +=1) {
    result.push(someArr[i] + someArr[i + 1]);
}

//console.log(result);
return result;
}

const someArr = [29, 1, 4, 5, 12, 10, 15]; // [33, 45, 39, 17, 25, 27, 29]
// const someArr = [22, 11, 34, 5, 12, 13, 14, 15]; // [33, 45, 39, 17, 25, 27, 29]
const result = sumAdjacentNumbers(someArr);
console.log(result); // [30, 5, 9, 17, 22, 25]


//TODO: 18 ===================================
//Напишіть функцію logItems(array), яка приймає
//масив та використовує цикл for, який для кожного
//елемента масиву виводитиме повідомлення у форматі
//<номер елемента> - <значення елемента>
//Нумерація елементів має починатися з першого.
//['Джаз', 'Блюз', 'Рок-н-рол', 'Реггі', 'Реп']

// const musicGenres = ['Джаз', 'Блюз', 'Рок-н-рол', 'Реггі', 'Реп'];

//? Answer

//?

// logItems(musicGenres);

//TODO: 19 ===================================
// Функція formatMessage(message, maxLength)
// приймає рядок (параметр message) і форматує його,
// якщо довжина перевищує значення параметрі maxLength.

// function formatMessage(message, maxLength) {

// return message.length > maxLength ? message.slice(0, maxLength) + "..." : message; 


// }
// //? Answer


// //?

// console.log(formatMessage('Curabitur ligula sapien', 16)); //Повертає 'Curabitur ligula...'.
// console.log(formatMessage('Curabitur ligula sapien', 23)); //Повертає 'Curabitur ligula sapien'.
// console.log(formatMessage('Nunc sed turpis a felis in nunc fringilla', 15)); //Повертає 'Nunc sed turpis...'.
// console.log(formatMessage('Nunc sed turpis a felis in nunc fringilla', 2)); //Повертає 'Nunc sed turpis a felis in nunc fringilla'.
