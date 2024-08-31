import { setSubscription } from '../api/setSubscription.js';
import {
  showErrorNotification,
  showNotification,
} from '../rendering/common.js';

const subscriptionForm = document.querySelector('.subscribe__form');
const emailInput = subscriptionForm.querySelector('[name="email"]');

export async function handleSubmitSubscription(event) {
  event.preventDefault();

  if (!emailInput.value) return;

  try {
    const email = emailInput.value;
    const res = await setSubscription(email);

    showNotification(res.message);

    subscriptionForm.reset();
  } catch (error) {
    showErrorNotification(error.message);
  }
}
