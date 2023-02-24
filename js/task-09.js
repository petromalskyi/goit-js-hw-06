function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const spanEl = document.querySelector('span');
const styleEl = document.querySelector('style');
const bodyEl = document.querySelector('body');
const targetBtn = document.querySelector('button');

targetBtn.addEventListener('click', () => {
  const randomHexColor = getRandomHexColor();
  spanEl.textContent = randomHexColor;
  bodyEl.classList.add('body');
  styleEl.append(`.body { background-color: ${randomHexColor}}`);
});
