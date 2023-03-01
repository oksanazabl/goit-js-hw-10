import './css/styles.css';
import debounce from 'lodash.debounce';
import { fetchCountries } from './js/fetchCountries';
import { addCountryList, addCountryInfo } from './js/markup';
import Notiflix from 'notiflix';

const DEBOUNCE_DELAY = 300;

refs = {
  input: document.querySelector('#search-box'),
  countryList: document.querySelector('.country-list'),
  countryInfo: document.querySelector('.country-info'),
};

function alertNoSuchCountry() {
  Notiflix.Notify.failure('Oops, there is no country with that name');
}

function alertSpecificName() {
  Notiflix.Notify.info(
    'Too many matches found. Please enter a more specific name.'
  );
}
