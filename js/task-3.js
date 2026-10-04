const input = document.querySelector('#name-input');
const span = document.querySelector('#name-output');
input.addEventListener('input', event => {
    if (event.target.value.trim() === '') {
        span.textContent = "Anonymous"
    }

    else {
        span.textContent = event.target.value.trim();
    }
})