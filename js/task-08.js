const formEl = document.querySelector('form');

formEl.addEventListener('submit', formSubmint);

function formSubmint(event) {
  event.preventDefault();

  const mail = event.currentTarget.elements.email.value;
  const password = event.currentTarget.elements.password.value;

  if (mail === '' || password === '') {
    alert('Всі поля повинні бути заповнені.');
  } else {
    const formObj = {
      mail,
      password,
    };

    function reset() {
      event.currentTarget.elements.email.value = '';
      event.currentTarget.elements.password.value = '';
    }
      
    console.log(formObj);

    reset();
  }
}
