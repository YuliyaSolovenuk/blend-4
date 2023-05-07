//TODO:====================01==================================Calculator=====================================================================
//    <div class="calculator js-calculator">
//   <div class="calculator-display">
//     <input class="js-result" type="text" name="result" value="0" disabled />
//   </div>
//   <div class="calculator-row">
//     <button class="calculator-button calculator-button-gray">C</button>
//     <button class="calculator-button calculator-button-gray">+/-</button>
//     <button class="calculator-button calculator-button-gray">%</button>
//     <button class="calculator-button calculator-button-orange">/</button>
//   </div>
//   <div class="calculator-row">
//     <button class="calculator-button">7</button>
//     <button class="calculator-button">8</button>
//     <button class="calculator-button">9</button>
//     <button class="calculator-button calculator-button-orange">*</button>
//   </div>
//   <div class="calculator-row">
//     <button class="calculator-button">4</button>
//     <button class="calculator-button">5</button>
//     <button class="calculator-button">6</button>
//     <button class="calculator-button calculator-button-orange">-</button>
//   </div>
//   <div class="calculator-row">
//     <button class="calculator-button">1</button>
//     <button class="calculator-button">2</button>
//     <button class="calculator-button">3</button>
//     <button class="calculator-button calculator-button-orange">+</button>
//   </div>
//   <div class="calculator-row">
//     <button class="calculator-button calculator-button-double">0</button>
//     <button class="calculator-button">.</button>
//     <button class="calculator-button calculator-button-orange">=</button>
//   </div>
// </div>

/**
  |============================
  | Calculator:
  | 1 - Для початку реалізуй функціанал додавання калькулятора при кліці на кнопку "Показати калькулятор". Калькулятор повинен зявитесь і текст кнопки змфнитись на
  | "Приховати калькулятор". Є прописаний клас у css, який відповідає за колір відповідної кнопки. Тому при відображенні розмітки, ще додавай або видаляй клас 
  | "calc-close". Розмітка калькулятора закоментована на початку сторінки. Для додавання елементів у Дом дерево, використай метод "insertAdjacentHTML".
  | 2 - Коли калькулятор зявився на сторінці, реалізуй його функціанал. Зроби основні математичні обчислення (* + - /). Реалізуй це за допомогою делігування подій 
  | слухача встанови на ".js-calculator". Далі вся робота буде відбуватись за допомогою тільки однієї функції "onBtnClick", яка буде опрацьовувати усі події + допоміжна
  | функція "clearResult", яка буде робити очистку при кліці на кнопку "AC".  
  | 
  | Виконуй завдвння послідовно: 
  | - Спочатку знайди елементи у Дом дереві, з якими тобі потрібно працювати.
  | - Додай слухачі подій з відповідними подіями
  | - Спочатку реалізовуємо відмальовку калькулятора при кліці на кнопку.
  | - Створи зміні, які нам допоможуть: 
  | display за допомогою document.querySelector; Це нам знадобиться, щоб зчитувати данні з його .value
  | num1 з початковим значення  = 0; Сюди будимо записувати значення першого введенного числа
  | operator з початковим значення = ""; Сюди будемо записувати який символ оператора ми натискаємо
  | resultValue з початковим значення = ""; Сюди будемо записувати результат і вивадити на display
  | - Створюємо масив символів const symbolArray = ['+', '-', '*', '/', '%']; Щоб легше робити перевірку
  | - Ну і пишимо головну функцію "onBtnClick". Не забуваємо відміняти поведінку по змовчуванню. Не забуваємо про перевірку на цільовий елемент, що ми саме клікаємо у 
  | кнопку. Значення кнопок, можемо дістати з "target.textContent". Це нам допоможе дізнатись у яку кнопку ми нажали. За допомогою перевірок if else if else, робимо 
    перевірки і пишемо логіку. Обчислення олбимо за допомогою "switch". 
  |============================
*/
