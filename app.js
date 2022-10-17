const form = document.querySelector('form');
const input = document.querySelector('#email');
const button = document.querySelector('.submit-btn');
const iconError = document.querySelector('.icon-error');
const errorText = document.querySelector('.error-text');

button.addEventListener('click', (e) => {
    e.preventDefault();

    if (input.value === '') {
        iconError.classList.remove('hidden');
        errorText.classList.remove('hidden');
        form.classList.add('error');
        errorText.innerHTML = 'This field is required';
        input.focus();
    } else if (input.value.indexOf('@') < 0) {
        iconError.classList.remove('hidden');
        errorText.classList.remove('hidden');
        form.classList.add('error');
        errorText.innerHTML = 'Please provide a valid email';
        input.focus();
    } else if (input.value.indexOf('.com') < 0) {
        iconError.classList.remove('hidden');
        errorText.classList.remove('hidden');
        form.classList.add('error');
        errorText.innerHTML = 'Please provide a valid email';
        input.focus();
    } else {
        console.log('a');
        iconError.classList.add('hidden');
        errorText.classList.add('hidden');
        form.classList.remove('error');
    }
});

// Please provide a valid email