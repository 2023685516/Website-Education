document.addEventListener('DOMContentLoaded', () => {
    // Fungsi butang print (sebagai tambahan kepada onclick dalam HTML)
    const printBtn = document.getElementById('printBtn');
    if (printBtn) {
        printBtn.addEventListener('click', () => {
            window.print();
        });
    }

    // Fungsi interaktif untuk checkbox bahan-bahan
    const checkboxes = document.querySelectorAll('.ingredient-item input[type="checkbox"]');
    
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const itemText = this.nextElementSibling;
            if (this.checked) {
                itemText.style.textDecoration = "line-through";
                itemText.style.color = "#888";
            } else {
                itemText.style.textDecoration = "none";
                itemText.style.color = "inherit";
            }
        });
    });
});