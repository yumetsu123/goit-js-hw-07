const form = document.querySelector('.login-form');
const formInputs = form.querySelectorAll('input');

form.addEventListener('submit', event => {
    event.preventDefault();

    let isEmpty = false;

    formInputs.forEach(item => {
        if (item.value.trim() === '') {
            isEmpty = true;
        }
    });

    if (isEmpty) {
        alert('All form fields must be filled in');
        return;
    }

    const formData = new FormData(event.target);

    const formObject = {
        email: formData.get('email'),
        password: formData.get('password')
    };

    console.log(formObject);
    event.target.reset();
});