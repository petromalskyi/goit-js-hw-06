function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputEl = document.querySelector('input');
const targetBtnCreateEl = document.querySelector('button[data-create]');
const targetBtnDestroyEl = document.querySelector('button[data-destroy]');
const divEl = document.querySelector('div[id="boxes"]');

targetBtnCreateEl.addEventListener('click', () => {
  const countBox = inputEl.value;
  if (countBox !== '') {
    const newDivs = [];
    let sizeBox = 20;

    for (let index = 0; index < Number(countBox); index += 1) {
      newDivs[index] = document.createElement('div');
      newDivs[index].style.width = `${(sizeBox += 10)}px`;
      newDivs[index].style.height = `${(sizeBox += 10)}px`;
      newDivs[index].style.backgroundColor = `${getRandomHexColor()}`;
    }
    divEl.append(...newDivs);
  }
});

targetBtnDestroyEl.addEventListener('click', () => {
  inputEl.value = '';
  divEl.innerHTML = '';
});
