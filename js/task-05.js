const targetInput = document.querySelector('#name-input');

const spanEl = document.querySelector('#name-output');

targetInput.addEventListener('input', onInputChange);

function onInputChange(event) {
  spanEl.textContent = event.currentTarget.value;
  if (spanEl.textContent === '') {
    spanEl.textContent = 'Anonymous';
  }
}


