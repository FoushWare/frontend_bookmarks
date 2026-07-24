function toggleTheme() {
    const html = document.documentElement;
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
    console.log('Theme toggled to:', newTheme);
}

function updateThemeIcon(theme) {
    const toggle = document.querySelector('.theme-toggle');
    if (toggle) {
        toggle.textContent = theme === 'dark' ? '☀️' : '🌙';
    }
}

// Initialize theme and setup event listener
(function() {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = savedTheme || (prefersDark ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', theme);
    updateThemeIcon(theme);
    console.log('Theme initialized to:', theme);
    
    // Setup event listener for theme toggle button
    function setupThemeToggle() {
        const toggleBtn = document.querySelector('.theme-toggle');
        if (toggleBtn) {
            console.log('Theme toggle button found');
            toggleBtn.addEventListener('click', function(e) {
                console.log('Theme toggle clicked');
                e.preventDefault();
                toggleTheme();
            });
        } else {
            console.log('Theme toggle button not found on this page');
        }
    }
    
    // Check if DOM is already loaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', setupThemeToggle);
    } else {
        // DOM is already ready, setup immediately
        setupThemeToggle();
    }
})();
