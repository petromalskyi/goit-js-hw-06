const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulEl = document.querySelector('#ingredients');
const ulItemEl = [];

ingredients.forEach((ingredient, index) => {
  ulItemEl[index] = document.createElement('li');
  ulItemEl[index].textContent = ingredient;
  ulItemEl[index].classList.add('item');
});

ulEl.append(...ulItemEl);



