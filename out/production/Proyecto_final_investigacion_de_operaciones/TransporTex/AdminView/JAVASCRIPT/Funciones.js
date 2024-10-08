document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Aquí puedes agregar la lógica para validar las credenciales
    if (email === 'admin@transportes.com' && password === 'admin123') {
        alert('Inicio de sesión exitoso');
        // Redirigir a la página de administración
        window.location.href = 'admin-dashboard.html';
    } else {
        alert('Credenciales incorrectas');
    }
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                window.location.href = 'admin-dashboard.html';
            } else {
                alert('Correo electrónico o contraseña incorrectos');
            }
        })
        .catch(error => console.error('Error:', error));
});