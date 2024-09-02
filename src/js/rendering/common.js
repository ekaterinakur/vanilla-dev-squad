// only common utils for notifications, loading, scrolling
// for sections rendering use separate modules: 1 file per 1 section

import iziToast from 'izitoast';

iziToast.settings({
  class: 'custom-toast',
  position: 'topRight',
  maxWidth: 432,
  color: '#FFFFFF',
  titleColor: '#FFFFFF',
  messageColor: '#FFFFFF',
  iconColor: '#FFFFFF',
  displayMode: 1,
});

export function showLoader() {
  document.getElementById('loader').classList.remove('hidden');
}

export function hideLoader() {
  document.getElementById('loader').classList.add('hidden');
}

export function showNotification(message) {
  iziToast.success({
    message,
    backgroundColor: '#4DC274',
  });
}

export function showErrorNotification(message) {
  iziToast.error({
    message,
    backgroundColor: '#EF4040',
  });
}

export function smoothScroll() {
  // TODO smooth scroll for pagination (if needed)

	window.scrollBy({
		top: 0, // TODO
		behavior: 'smooth',
	});
}
