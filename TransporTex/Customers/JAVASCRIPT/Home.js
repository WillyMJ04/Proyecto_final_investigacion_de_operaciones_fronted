document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('shoppingCart').addEventListener('click', function() {
        window.location.href = '../HTML/DetailPurchase.html';
    });
    document.getElementById('firstChevron').addEventListener('click', function() {
        window.location.href = '../HTML/Food.html';
    });
    document.getElementById('chevronConstruccion').addEventListener('click', function() {
        window.location.href = '../HTML/Construction.html';
    });
    document.getElementById('chevronElectronicos').addEventListener('click', function() {
        window.location.href = '../HTML/Technology.html';
    });



});

function hideIcon() {
    const searchIcon = document.getElementById('searchIcon');
    searchIcon.style.display = 'none';
}

function showIcon() {
    const searchIcon = document.getElementById('searchIcon');
    searchIcon.style.display = 'block';
}
