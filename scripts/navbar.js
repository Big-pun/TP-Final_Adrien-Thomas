// Function to toggle the mobile menu
function toggleMobileMenu() {
  const navbar = document.getElementById("navbar-sticky");
  navbar.classList.toggle("hidden");
}

// Event listener for mobile menu button
const mobileMenuButton = document.querySelector(
  '[data-collapse-toggle="navbar-sticky"]'
);
mobileMenuButton.addEventListener("click", toggleMobileMenu);

// Dropdown menu abonnements in navbar
document.addEventListener("DOMContentLoaded", function () {
  const dropdownToggle = document.getElementById("dropdownNavbarLink");
  const dropdownMenu = document.getElementById("dropdownNavbar");

  dropdownToggle.addEventListener("click", function () {
    dropdownMenu.classList.toggle("hidden");
  });

  // Optional: Close the dropdown if clicked outside
  document.addEventListener("click", function (event) {
    if (
      !dropdownToggle.contains(event.target) &&
      !dropdownMenu.contains(event.target)
    ) {
      dropdownMenu.classList.add("hidden");
    }
  });
});
