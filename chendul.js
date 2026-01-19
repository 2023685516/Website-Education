document.addEventListener('DOMContentLoaded', function() {
    const printBtn = document.getElementById('btnPrint');

    if (printBtn) {
        printBtn.addEventListener('click', function() {
            window.print();
        });
    }

    // Menambah interaksi pada checkbox bahan-bahan
    const checkboxes = document.querySelectorAll('.ingredient-item input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            if (this.checked) {
                this.parentElement.style.opacity = '0.5';
                this.parentElement.style.textDecoration = 'line-through';
            } else {
                this.parentElement.style.opacity = '1';
                this.parentElement.style.textDecoration = 'none';
            }
        });
    });
});