function searchRecipe() {
    let input = document.getElementById('searchInput').value.toLowerCase();
    
    let cards = document.getElementsByClassName('recipe-card');
    let noResult = document.getElementById('noResult');
    let hasResults = false;

    for (let i = 0; i < cards.length; i++) {
        let title = cards[i].getElementsByTagName('h3')[0].innerText.toLowerCase();
        let description = cards[i].getElementsByTagName('p')[0].innerText.toLowerCase();

        if (title.includes(input) || description.includes(input)) {
            cards[i].style.display = "block";
            hasResults = true;
        } else {
            cards[i].style.display = "none";
        }
    }

    if (hasResults) {
        noResult.style.display = "none";
    } else {
        noResult.style.display = "block";
    }
}