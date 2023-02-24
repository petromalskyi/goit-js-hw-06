const btnDecrementEl = document.querySelector('[data-action="decrement"]');
const btnIncrementEl = document.querySelector('[data-action="increment"]');

const spanEl = document.querySelector('#value');

let counterValue = 0;

btnDecrementEl.addEventListener('click', () => {
  counterValue -= 1;
  changeSpan();
});

btnIncrementEl.addEventListener('click', () => {
  counterValue += 1;
  changeSpan();
});

function changeSpan() {
  spanEl.textContent = String(counterValue);
}
