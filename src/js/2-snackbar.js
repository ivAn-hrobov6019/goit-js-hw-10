import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', event => {
  event.preventDefault();

  const formElements = event.currentTarget.elements;
  const delay = Number(formElements.delay.value);
  const state = formElements.state.value;

  createPromise(delay, state)
    .then(delay => {
      iziToast.success({
        icon: '',
        message: `✅ Fulfilled promise in ${delay}ms`,
        position: 'topRight',
        backgroundColor: '#59b17a',
        titleColor: '#fff',
        messageColor: '#fff',
      });
    })
    .catch(delay => {
      iziToast.error({
        icon: '',
        message: `❌ Rejected promise in ${delay}ms`,
        position: 'topRight',
        backgroundColor: '#ef4040',
        titleColor: '#fff',
        messageColor: '#fff',
      });
    });

  form.reset();
});

function createPromise(delay, state) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });
}
