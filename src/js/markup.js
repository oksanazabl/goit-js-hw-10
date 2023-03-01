export function addCountryList(countries) {
  const markup = countries
    .map(({ name, flags }) => {
      return `
          <li class="list">
              <img class="country-list__flag" src="${flags.svg}" alt="Flag of ${name.official}" width = 90px height = 60px>
              <h2>${name.official}</h2>
          </li>
          `;
    })
    .join('');
  return markup;
}

export function addCountryInfo(countries) {
  const markup = countries
    .map(({ capital, population, languages }) => {
      return `
        <ul class="country-info">
            <li class="info"><p><b>Capital: </b>${capital}</p></li>
            <li class="info"><p><b>Population: </b>${population}</p></li>
            <li class="info"><p><b>Languages: </b>${Object.values(
              languages
            ).join(', ')}</p></li>
        </ul>
        `;
    })
    .join('');
  return markup;
}
