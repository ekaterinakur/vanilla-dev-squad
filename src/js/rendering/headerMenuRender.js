// Function to hide the mobile menu
export function hideMobileMenu() {
  const headerMenu = document.querySelector('.js-header-menu');
  headerMenu.classList.remove('open');
}

// Function to remove event listeners from buttons (if needed)
export function removeButtonListeners() {
  const menuButton = document.getElementById('menuButton');
  menuButton.removeEventListener('click', handleMenuToggle);
}
