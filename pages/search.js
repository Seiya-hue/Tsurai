document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.querySelector('.search');
    const searchButton = document.querySelector('.search-button');
    const portfolioPages = {
        'portfolio 1': '../portfolios/portfolio1.html',
        'portfolio 2': '../portfolios/portfolio2.html',
        'portfolio 3': '../portfolios/portfolio3.html',
        'portfolio 4': '../portfolios/portfolio4.html',
        'portfolio 5': '../portfolios/portfolio5.html',
        'portfolio 6': '../portfolios/portfolio6.html',
    };

    function handleSearch() {
        const searchTerm = searchInput.value.toLowerCase();
        if (portfolioPages[searchTerm]) {
            window.location.href = portfolioPages[searchTerm];
        } else {
            alert('No matching portfolio found! Try checking and try again.');
        }
    }

    searchInput.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            handleSearch();
        }
    });

    searchButton.addEventListener('click', handleSearch);
});
