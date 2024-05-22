// assets/js/router.js

// Define the routes and their corresponding HTML file paths
const routes = {
    '/': '/index.html',
    '/about': '/about.html',
    '/services': '/services.html',
    '/faq': '/faq.html',
    '/pricing': '/pricing.html',
    '/contact': '/contact.html'
};

// Function to handle route changes
function handleRoute() {
    const path = window.location.pathname;
    const route = routes[path] || routes['/'];

    fetch(route)
        .then(response => response.text())
        .then(html => {
            document.getElementById('main-content').innerHTML = html;
        })
        .catch(err => console.error('Error loading the page:', err));
}

// Function to navigate to a new route
function navigate(event) {
    event.preventDefault();
    const path = event.target.getAttribute('href');
    window.history.pushState({}, path, window.location.origin + path);
    handleRoute();
}

// Attach event listeners to navigation links
function initRouter() {
    document.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', navigate);
    });

    window.addEventListener('popstate', handleRoute);
}

// Initialize the router
document.addEventListener('DOMContentLoaded', () => {
    initRouter();
    handleRoute();
});
