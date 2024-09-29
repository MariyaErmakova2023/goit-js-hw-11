import './js/pixabay-api';
import './js/render-functions';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { searchImages } from './js/pixabay-api';
import { createGallery, clearGallery } from './js/render-functions';

const refs = {
  formEl: document.querySelector('.form'),
  inputEl: document.querySelector('.search'),
};
//*======================================

refs.formEl.addEventListener('submit', e => {
  e.preventDefault();
  clearGallery();
  const value = e.target.elements.search.value;
  console.log(value);

  searchImages(value)
    .then(data => {
      const markup = createGallery(data);
      refs.inputEl.insertAdjacentHTML('afterbegin', markup);
    })
    .catch(err => {});
});
