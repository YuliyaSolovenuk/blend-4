//TODO:====================01===========================Модальне вікно=============================================================================
/**
  |============================
  | Модальне вікно:
  |  1 - Реалізувати відкриття модального вікна по кліку по кнопці "Відкрити модалку"
  |  2 - Реалізувати закриття модального вікна по кліку на "кнопку", "ESC" і "бекдроп". Не забувай знімати слухача події після закриття модального вікна
  |  Виконуй завдвння послідовно: 
  |  - Спочатку знайди елементи у Дом дереві, з якими тобі потрібно працювати. 
  |  - Створи 4 функції onOpenModalBtnElClick, closeModalWindow, onEscClick, onBackdropClick. Не забувай робити перевірку на цільовий елемент. 
  |  - Клас який відповідає за ,відображення і скриття модального вікна "is-open"
  |============================
*/

const openModalBtnEl = document.querySelector('.js-modal-open')
const becdropEl = document.querySelector('.js-backdrop')
const closeModalBtnEl = document.querySelector('.js-modal-close')

openModalBtnEl.addEventListener('click', onOpenModalBtnElClick)
closeModalBtnEl.addEventListener('click', closeModalWindow)

function onOpenModalBtnElClick(event) {
  
  becdropEl.classList.add('is-open')

  window.addEventListener('keydown', onEscClick)
  window.addEventListener('click', onBackdropClick)
}

function closeModalWindow(event) {

  becdropEl.classList.remove('is-open')
  window.removeEventListener('keydown', onEscClick)
  window.removeEventListener('click', onBackdropClick)
}


function onEscClick(event) {
  if (event.code !== "Escape") {
   return
 }

 closeModalWindow()

}

function onBackdropClick(event) {

  if (event.target !== becdropEl) {
    return
  }
  closeModalWindow()
}


/**
  |============================
  | Робота з формою:
  | 1 - Реалізуй відправку данних через подію "submit" на формі
  | 2 - Зроби перевірку на заповнення інпутів "email" і "password". Вони не повинні бути пустими. Поле "name", може бути пустим для приватності користувача 
  | виводь про це в повідемленні за допомогою метода "alert" - "email or password is empty"
  | 3 - При відправки форми в консоль виведи обьект з данними користувача. Реалізуй перевірку, якщо еористувач не ввів імʼя, записуй в обьект рядок "Anonimus"
  |
  | Виконуй завдвння послідовно: 
  |  - Спочатку знайди елементи у Дом дереві, з якими тобі потрібно працювати.
  |  - Повісь слухача події на форму
  |  - Пропиши колбєк функцію onSubmit. Не забувай про відміну поведінки по змовчуванню. Значення інпутів знайди за допомогою currentTarget і його elements.
  |  - Після отправки почисти форму і реалізуй автоматичне закриття модального вікна
  |============================
*/

const formEl = document.querySelector('.js-modal__form')

formEl.addEventListener('submit', onSubmit)

function onSubmit(event) {
  event.preventDefault();

  console.dir(event.currentTarget.name);
  const { elements: { name, email, password } } = event.currentTarget
  console.log(name, email, password);
  if (!email.value  || !password.value ) {
   return alert("email or password is empty")
    
  }

  console.log({
    name: name.value || 'Anonymous',
    email: email.value,
    password: password.value
  });
   
  formEl.reset()
  closeModalWindow()
}


//TODO:====================02====================================TODOS============================================================================================
/**
  |============================
  | Список справ todos:
  | 1 - Напиши скрипт для застосунку todos. Реалізуй методи додавання та видалення щоденних справ.
  | 2 - Реалізуй перевірку на неможлівість додати пусту справу до списку справ. 
  | Виконуй завдвння послідовно: 
  | - Спочатку знайди елементи у Дом дереві, з якими тобі потрібно працювати.
  | - Додай слухачі подій з відповідними подіями
  | - Пропиши три функції, які тобі допоможуть це реалізувати 
  | - Функція обробник на додавання елементів "onClickSubmit". Її завдання, зчитати значення з інпуту, виконай за допомогою "currentTarget.elements", також не забувай
  | про метод trim(), який видаляє пробіли. Ця функція повинна робити перевірку на пустий інпут, створювати обьект, додавати до масиву нову todos і чистити інпут. Також
  | запускати функцію рендера сторінкі.
  | - Функція "onBtnClick", яка буде видаляти todos. Вона повинна знайти id todos, яку потрібно видалити. Значення id можно считати з дата атрибуту за допомогою 
  | "target.dataset.id", але не забувай, що там буде рядок і можно використати метод "parseInt". Для видалення можно використати метод "filter". Після видалення ми 
  | повинні відрендорити сторінку за допомогою функції "updateList".
  | - І сама функція "updateList". Ії завдання створити розмітку за допомого метода createElement і setAttribute, додати на сторінку за допомогою метода "append". Не 
  | забувай чистити розмітку перед її вставкою.
  |============================
*/
