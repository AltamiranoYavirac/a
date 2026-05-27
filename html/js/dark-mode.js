// Dark Mode Functionality
document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const htmlElement = document.documentElement;
    const bodyElement = document.body;
    
    // Check if dark mode preference is saved in localStorage
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    
    // Apply saved preference on page load
    if (isDarkMode) {
        darkModeToggle.checked = true;
        bodyElement.classList.add('dark-mode-active');
        htmlElement.setAttribute('data-theme', 'dark');
    }
    
    // Toggle dark mode on checkbox change
    darkModeToggle.addEventListener('change', function() {
        if (this.checked) {
            bodyElement.classList.add('dark-mode-active');
            htmlElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('darkMode', 'true');
        } else {
            bodyElement.classList.remove('dark-mode-active');
            htmlElement.setAttribute('data-theme', 'light');
            localStorage.setItem('darkMode', 'false');
        }
    });
});
