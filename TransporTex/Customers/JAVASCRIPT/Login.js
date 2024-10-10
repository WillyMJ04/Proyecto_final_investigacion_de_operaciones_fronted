document.addEventListener('DOMContentLoaded', function() {
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const loginButton = document.getElementById('loginButton');

    function validateForm() {
        const emailValid = emailInput.value.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);
        const passwordValid = passwordInput.value.length > 0;

        if (emailValid && passwordValid) {
            loginButton.disabled = false;
            loginButton.classList.add('enabled');
            loginButton.classList.remove('disabled');
        } else {
            loginButton.disabled = true;
            loginButton.classList.add('disabled');
            loginButton.classList.remove('enabled');
        }
    }

    // Escuchar cambios en los campos de entrada
    emailInput.addEventListener('input', validateForm);
    passwordInput.addEventListener('input', validateForm);

    // Redirigir al hacer clic en "Iniciar Sesión"
    loginButton.addEventListener('click', function() {
        if (!loginButton.disabled) {
            window.location.href = '../HTML/getStarter.html';  // Redirige a la página que mencionaste
        }
    });
});
