document.addEventListener('DOMContentLoaded', () => {
    // Fungsi Butang Cetak
    const printBtn = document.getElementById('printBtn');
    if (printBtn) {
        printBtn.addEventListener('click', () => {
            window.print();
        });
    }

    // Fungsi Interaktif Checkbox Bahan
    const checkboxes = document.querySelectorAll('.ingredient-item input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const span = this.nextElementSibling;
            if (this.checked) {
                span.style.textDecoration = 'line-through';
                span.style.opacity = '0.5';
            } else {
                span.style.textDecoration = 'none';
                span.style.opacity = '1';
            }
        });
    });
});