
const inputEl = document.querySelector('input');

const spanEl = document.querySelector('span');

inputEl.addEventListener('mousemove', onMouseMove);

function onMouseMove(event) {
    if (event.clientX >= Number(inputEl.min) &&
        event.clientX <= Number(inputEl.max)) {
        spanEl.style = `font-size:${event.clientX}px`;
    }
}
