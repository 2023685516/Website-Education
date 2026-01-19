/**
 * Function to trigger the browser's print dialog
 */
function printRecipe() {
    window.print();
}

/**
 * Optional: Checkbox listener to strike-through completed ingredients
 */
document.addEventListener('DOMContentLoaded', () => {
    const checkboxes = document.querySelectorAll('.ingredient-item input[type="checkbox"]');
    
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            if (this.checked) {
                this.nextElementSibling.style.textDecoration = "line-through";
                this.nextElementSibling.style.opacity = "0.6";
            } else {
                this.nextElementSibling.style.textDecoration = "none";
                this.nextElementSibling.style.opacity = "1";
            }
        });
    });
});