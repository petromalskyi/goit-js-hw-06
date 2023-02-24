const inputEl = document.querySelector('input');
const styleEl = document.querySelector('style');

inputEl.addEventListener('input', onInputChange);
inputEl.addEventListener('blur', onInputBlur);

function onInputChange(event) {
  inputEl.textContent = event.currentTarget.value;
}

function onInputBlur() {
  if (
    inputEl.textContent.length === Number(inputEl.getAttribute('data-length'))
  ) {
    styleEl.prepend('#validation-input {border: 2px solid  #4caf50};');
  } else {
    styleEl.prepend('#validation-input {border: 2px solid  #f44336};');
  }
}

// Напиши скрипт, який під час втрати фокусу на інпуті(подія blur),
// перевіряє його вміст щодо правильної кількості введених символів.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Please enter 6 symbols"
// />

//     Яка кількість символів повинна бути в інпуті, зазначається в
// його атрибуті data - length.
// Якщо введена правильна кількість символів, то border інпуту
// стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS - класи valid і invalid,
//     які ми вже додали у вихідні файли завдання.

// #validation-input {
//   border: 3px solid #bdbdbd;
// }

// #validation-input.valid {
//   border-color: #4caf50;
// }

// #validation-input.invalid {
//   border-color: #f44336;
// }
