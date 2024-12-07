document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.querySelector('.search');
    const portfolioPages = {
        'portfolio 1': '../portfolios/portfolio1.html',
        'portfolio 2': '../portfolios/portfolio2.html',
        'portfolio 3': '../portfolios/portfolio3.html',
        'portfolio 4': '../portfolios/portfolio4.html',
    };

    searchInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            const searchTerm = searchInput.value.toLowerCase();
            if (portfolioPages[searchTerm]) {
                window.location.href = portfolioPages[searchTerm]; 
            } else {
                alert('No matching portfolio found');
            }
        }
    });
});
