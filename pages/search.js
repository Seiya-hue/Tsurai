document.addEventListener("DOMContentLoaded", ()=> {
    const searchInput = document.querySelector('.search');
    const cards = document.querySelectorAll('.card');

    function filterCards() {
        const searchTerm = searchInput.value.toLowerCase();

        cards.forEach(card => {
            const title = card.querySelector('h3').textContent.toLowerCase();
            const description = card.querySelector('p').textContent.toLowerCase();


            if (title.includes(searchTerm) || description.includes(searchTerm)) {
                card.style.display = ""; 
            } else {
                card.style.display = "none"; 
            }
        });
    }   
    searchInput.addEventListener('input', filterCards);
});
