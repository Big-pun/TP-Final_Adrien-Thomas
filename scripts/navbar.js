// Function to toggle the mobile menu
function toggleMobileMenu() {
    const navbar = document.getElementById('navbar-sticky');
    navbar.classList.toggle('hidden');
}

// Event listener for mobile menu button
const mobileMenuButton = document.querySelector('[data-collapse-toggle="navbar-sticky"]');
mobileMenuButton.addEventListener('click', toggleMobileMenu);