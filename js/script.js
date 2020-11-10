const searchButton = document.querySelector('.search-button');
const form = document.querySelector('.search-form');
const checkIn = form.querySelector('input[name=check-in]');
const checkOut = form.querySelector('input[name=check-out]');
const adults = form.querySelector('input[name=adults]');
const children = form.querySelector('input[name=children]');

let isStorageSupport = true;
const storage = '';

try {
  storage = localStorage.getItem('adults');
} catch (err) {
  isStorageSupport = false;
}

searchButton.addEventListener('click', function(evt) {
  evt.preventDefault();
  form.classList.toggle('show-form');
});

form.addEventListener('submit', function(evt) {
  if (!checkIn.value || !checkOut.value || !adults.value || !children.value) {
    evt.preventDefault();
    form.classList.remove('search-form-error');
    form.offsetWidth = form.offsetWidth;
    form.classList.add('search-form-error');
  }
});

window.addEventListener('keydown', function(evt) {
  if (evt.key === 'Escape' ) {
    if (form.classList.contains('show-form')) {
      form.classList.remove('show-form');
    }
  }
});

