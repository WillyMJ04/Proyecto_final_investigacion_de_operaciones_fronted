document.addEventListener('DOMContentLoaded', function() {
    // Redirección para el carrito de compras
    document.getElementById('shoppingCart').addEventListener('click', function() {
        window.location.href = '../HTML/DetailPurchase.html';
    });

    // Redirección para el primer Chevron (Food)
    document.getElementById('firstChevron').addEventListener('click', function() {
        window.location.href = '../HTML/Food.html';
    });

    // Redirección para el botón de Construcción
    document.getElementById('chevronConstruccion').addEventListener('click', function() {
        window.location.href = '../HTML/Construction.html';
    });

    // Redirección para el botón de Electrónicos
    document.getElementById('chevronElectronicos').addEventListener('click', function() {
        window.location.href = '../HTML/Technology.html';
    });

    // Redirección para el botón de Home
    document.getElementById('buttonHome').addEventListener('click', function() {
        window.location.href = '../HTML/Home.html';
    });

    // Redirección para el botón de Ubicación
    document.getElementById('buttonUbication').addEventListener('click', function () {
        window.location.href = '../HTML/Ubication.html';
    });

    // Redirección para el botón de Perfil
    document.getElementById('buttonProfile').addEventListener('click', function () {
        window.location.href = '../HTML/Account.html';
    });

    // Función para ocultar el ícono de búsqueda
    function hideIcon() {
        const searchIcon = document.getElementById('searchIcon');
        searchIcon.style.display = 'none';
    }

    // Función para mostrar el ícono de búsqueda
    function showIcon() {
        const searchIcon = document.getElementById('searchIcon');
        searchIcon.style.display = 'block';
    }

    // Función para redirigir a la página de Ubicación
    function redirectToPage() {
        window.location.href = "../HTML/Ubication.html";
    }
});
