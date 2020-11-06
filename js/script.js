const searchButton = document.querySelector('.search-button');
const form = document.querySelector('.search-form');

searchButton.addEventListener('click', function(evt) {
  evt.preventDefault();
  form.classList.toggle('show-form');
});
