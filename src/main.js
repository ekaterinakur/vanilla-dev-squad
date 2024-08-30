// TODO listeners for actions

// Header Burger menu
const toggleButtons = document.querySelectorAll('.js-toggle-menu');
const navMenu = document.querySelector('.js-header-menu');

toggleButtons.forEach(button => {
  button.addEventListener('click', () => {
    const isExpanded = button.getAttribute('aria-expanded') === 'true';
    toggleButtons.forEach(btn =>
      btn.setAttribute('aria-expanded', !isExpanded)
    );
    navMenu.classList.toggle('open');
  });
});
// Header Burger menu
