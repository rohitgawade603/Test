const nameInput = document.getElementById('nameInput');
const emailInput = document.getElementById('emailInput');
const setPassInput = document.getElementById('setPass');
const confirmPassInput = document.getElementById('confirmPassInput');

init();

function init() {
    nameInput.addEventListener('blur', validateName);
    emailInput.addEventListener('blur', validateEmail);
    setPassInput.addEventListener('blur', validateSetPass);
    confirmPassInput.addEventListener('blur', validateConfirmPass);

}

function validateName() {
    const reg = /^[a-zA-Z]{2,10}$/;
    if(!reg.test(nameInput.value)) {
        nameInput.classList.add('is-invalid');
    } else {
        nameInput.classList.remove('is-invalid');
        nameInput.classList.add('is-valid');

    }
}