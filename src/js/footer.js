import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { postSubscription } from './api-service/subscription-api';

const elements = {
  form: document.querySelector('.subscribe__form'),
  emailInput: document.querySelector('[name="email"]'),
};

async function onSubmit(event) {
  event.preventDefault();

  if (!elements.emailInput.value) return;
  try {
    const formData = elements.emailInput.value;
    const res = await postSubscription(formData);
    iziToast.success({
      title: 'Success',
      message: res.message,
      position: 'topRight',
    });
    elements.form.reset();
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: error.response.data.message || error.message,
      position: 'topRight',
    });
  }
}

if (!!elements.form) {
  elements.form.addEventListener('submit', onSubmit);
}
