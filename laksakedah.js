document.addEventListener("DOMContentLoaded", function() {
    // Fungsi Butang Cetak
    const btn = document.getElementById('printButton');
    if (btn) {
        btn.onclick = function() {
            window.print();
        };
    }

    // Fungsi Interaktif Checkbox (Pilihan: Mencoret teks bahan bila ditanda)
    const checkboxes = document.querySelectorAll('.ingredient-item input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const textSpan = this.nextElementSibling;
            if (this.checked) {
                textSpan.style.textDecoration = "line-through";
                textSpan.style.opacity = "0.5";
            } else {
                textSpan.style.textDecoration = "none";
                textSpan.style.opacity = "1";
            }
        });
    });
});