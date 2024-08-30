// Function to remove event listeners from buttons (if needed)
export function removeButtonListeners() {
  const toggleButtons = document.querySelectorAll('.js-toggle-menu');
  toggleButtons.forEach(button => {
    button.removeEventListener('click', handleMenuToggle);
  });
}

export function addButtonListeners() {
  const toggleButtons = document.querySelectorAll('.js-toggle-menu');
  toggleButtons.forEach(button => {
    button.addEventListener('click', handleMenuToggle);
  });
}

// Event handler for toggling the mobile menu
export function handleMenuToggle(toggle = true) {
  const headerMenu = document.querySelector('.js-header-menu');

  if (toggle) {
    headerMenu.classList.toggle('open');
  } else {
    headerMenu.classList.remove('open');
  }
}
