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

// Initialize theme
(function() {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = savedTheme || (prefersDark ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', theme);
    updateThemeIcon(theme);
    console.log('Theme initialized to:', theme);
})();

// Setup event listener with multiple fallbacks
document.addEventListener('DOMContentLoaded', function() {
    function setupThemeToggle() {
        const toggleBtn = document.querySelector('.theme-toggle');
        if (toggleBtn) {
            console.log('Theme toggle button found');
            toggleBtn.addEventListener('click', function(e) {
                console.log('Theme toggle clicked');
                e.preventDefault();
                e.stopPropagation();
                toggleTheme();
            });
        } else {
            console.log('Theme toggle button not found, retrying...');
            // Retry after a short delay for React hydration
            setTimeout(setupThemeToggle, 100);
        }
    }
    setupThemeToggle();
});

// Also try immediately in case DOM is already loaded
setTimeout(function() {
    const toggleBtn = document.querySelector('.theme-toggle');
    if (toggleBtn && !toggleBtn.hasAttribute('data-theme-listener')) {
        console.log('Setting up theme toggle immediately');
        toggleBtn.setAttribute('data-theme-listener', 'true');
        toggleBtn.addEventListener('click', function(e) {
            console.log('Theme toggle clicked (immediate)');
            e.preventDefault();
            e.stopPropagation();
            toggleTheme();
        });
    }
}, 500);
