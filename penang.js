function searchRecipe() {
    // Ambil teks carian dan tukar ke huruf kecil
    let input = document.getElementById('searchInput').value.toLowerCase();
    
    // Ambil semua kad resipi
    let cards = document.getElementsByClassName('recipe-card');
    let noResult = document.getElementById('noResult');
    
    // Penanda untuk mengesan jika ada hasil dijumpai
    let hasResults = false;

    for (let i = 0; i < cards.length; i++) {
        // Ambil teks dari h3 (tajuk) dan p (deskripsi)
        let title = cards[i].getElementsByTagName('h3')[0].innerText.toLowerCase();
        let description = cards[i].getElementsByTagName('p')[0].innerText.toLowerCase();

        // Jika teks carian ada dalam tajuk ATAU deskripsi
        if (title.includes(input) || description.includes(input)) {
            cards[i].style.display = "block"; // Tunjukkan kad
            hasResults = true;
        } else {
            cards[i].style.display = "none"; // Sembunyikan kad
        }
    }

    // Tunjukkan mesej "tidak dijumpai" jika hasResults tetap false
    if (hasResults) {
        noResult.style.display = "none";
    } else {
        noResult.style.display = "block";
    }
}