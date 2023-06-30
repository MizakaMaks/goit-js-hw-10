import { fetchBreeds, fetchCatBreed } from './cat-api';

const catInfo = document.querySelector('.cat-info');
const selector = document.querySelector('.breed-select');
const loading = document.querySelector('.loader');
const error = document.querySelector('.error');
error.style.display = 'none';

selector.addEventListener('change', reloadInfo);

fetchBreeds()
  .then(showBreedsInfo)
  .catch(error => {
    console.log(error);
    showError();
  });

function showBreedsInfo(breeds) {
  breeds.forEach(breed => {
    const option = document.createElement('option');
    option.value = breed.id;
    option.textContent = breed.name;
    selector.appendChild(option);
    hideLoader();
  });

  fetchCatBreed(breeds[0].id)
    .then(addMarkupCat)
    .catch(error => {
      console.log(error);
      showError();
    });
}

function addMarkupCat(cat) {
  catInfo.innerHTML = `
        <img src="${cat[0].url}" alt="${cat[0].breeds[0].name}"></img>
        <h2>${cat[0].breeds[0].name}</h2>
        <p>${cat[0].breeds[0].description}</p>
        <p><b>Temperament: ${cat[0].breeds[0].temperament}</b></p>
    `;
}

function reloadInfo(e) {
  showLoader();
  catInfo.innerHTML = '';
  fetchCatBreed(e.target.value)
    .then(addMarkupCat)
    .catch(error => {
      console.log(error);
      showError();
    })
    .finally(() => {
      hideLoader();
    });
}

function hideLoader() {
  loading.style.display = 'none';
}

function showLoader() {
  loading.style.display = 'block';
}

function showError() {
  error.style.display = 'block';
}
