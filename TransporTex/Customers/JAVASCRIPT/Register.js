document.addEventListener('DOMContentLoaded', function() {
    const emailInput = document.getElementById('email');
    const nameInput = document.getElementById('name');
    const passwordInput = document.getElementById('password');
    const phoneInput = document.getElementById('phone');
    const termsCheckbox = document.getElementById('termsAndConditions');
    const privacyCheckbox = document.getElementById('privacyPolicy');
    const registerButton = document.getElementById('registerButton');
    const loginButton = document.getElementById('getStartedText');

    function validateForm() {
        const emailValid = emailInput.value.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(?:\.[a-zA-Z]{2,})?$/);
        const nameValid = nameInput.value.match(/^[A-Za-z\s]+$/);
        const phoneValid = phoneInput.value.match(/^\d{8}$/);
        const termsChecked = termsCheckbox.checked;
        const privacyChecked = privacyCheckbox.checked;

        if (emailValid && nameValid && phoneValid && termsChecked && privacyChecked) {
            registerButton.disabled = false;
            registerButton.classList.add('enabled');
        } else {
            registerButton.disabled = true;
            registerButton.classList.remove('enabled');
        }
    }

    // Redirigir a Login.html cuando se haga clic en "Regístrate"
    registerButton.addEventListener('click', function() {
        if (!registerButton.disabled) {
            window.location.href = '../HTML/Login.html';
        }
    });

    // Redirigir a Login.html cuando se haga clic en "Iniciar Sesión"
    loginButton.addEventListener('click', function() {
        window.location.href = '../HTML/Login.html';
    });

    emailInput.addEventListener('input', validateForm);
    nameInput.addEventListener('input', validateForm);
    phoneInput.addEventListener('input', validateForm);
    termsCheckbox.addEventListener('change', validateForm);
    privacyCheckbox.addEventListener('change', validateForm);
});
