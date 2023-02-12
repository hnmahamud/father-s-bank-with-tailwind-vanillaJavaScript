const userEmail = document.getElementById('user-email');
const userPassword = document.getElementById('user-password');
const submitBtn = document.getElementById('btn-submit');

userEmail.addEventListener('keyup', function (event) {
    setAlert('user-wrong-alert', false);
    if (event.target.value.endsWith('@father.com')) {
        submitBtn.removeAttribute('disabled');
        submitBtn.classList.remove('disabled:opacity-50');
        submitBtn.classList.add('hover:bg-amber-700');
    }
    else {
        submitBtn.setAttribute('disabled', true);
        submitBtn.classList.add('disabled:opacity-50');
        submitBtn.classList.remove('hover:bg-amber-700');
    }
});

userPassword.addEventListener('keyup', function (event) {
    setAlert('user-wrong-alert', false);
    if (event.key === 'Enter') {
        event.preventDefault();
        submitBtn.click();
    }
});

submitBtn.addEventListener('click', function () {
    if (userEmail.value === 'child@father.com' && userPassword.value === 'secret') {
        setAlert('user-wrong-alert', false);
        window.location.href = 'bank.html';
    }
    else {
        setAlert('user-wrong-alert', true);
    }
})