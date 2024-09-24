document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.getElementById('searchButton');
    const searchBar = document.getElementById('searchBar');
    const result = document.getElementById('result');

    searchButton.addEventListener('click', () => {
        const query = searchBar.value;
        result.textContent = `You searched for: ${query}`;
        searchBar.value = '';
    });
});
