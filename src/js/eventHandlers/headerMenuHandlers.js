import {
  removeButtonListeners,
  hideMobileMenu,
} from '../rendering/headerMenuRender.js';

// Event handler for toggling the mobile menu
export function handleMenuToggle(toggle = true) {
  const headerMenu = document.querySelector('.js-header-menu');

  if (toggle) {
    headerMenu.classList.toggle('open');
  } else {
    hideMobileMenu();
  }
}
