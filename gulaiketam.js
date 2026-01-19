/**
 * Fungsi untuk mencetak resipi
 */
function printRecipe() {
    window.print();
}

/**
 * Logik tambahan untuk interaksi checkbox bahan-bahan
 */
document.addEventListener('DOMContentLoaded', () => {
    const ingredientCheckboxes = document.querySelectorAll('.ingredient-item input[type="checkbox"]');

    ingredientCheckboxes.forEach(checkbox => {
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