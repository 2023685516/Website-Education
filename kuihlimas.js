document.addEventListener('DOMContentLoaded', () => {
    // Fungsi Butang Cetak
    const printBtn = document.getElementById('printBtn');
    if (printBtn) {
        printBtn.addEventListener('click', () => {
            window.print();
        });
    }

    // Fungsi Interaktif Checkbox Bahan-bahan
    const checkboxes = document.querySelectorAll('.ingredient-item input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const text = this.nextElementSibling;
            if (this.checked) {
                text.style.textDecoration = 'line-through';
                text.style.opacity = '0.5';
            } else {
                text.style.textDecoration = 'none';
                text.style.opacity = '1';
            }
        });
    });
});