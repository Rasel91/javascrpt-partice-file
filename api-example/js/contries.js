const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data))

}

const displayCountries = countries => {
    const countriesContainer = document.getElementById('countries-container');
    for (const country of countries) {

        const countryDiv = document.createElement('div');
        countryDiv.classList.add('country');
        
        countryDiv.innerHTML = `
         <h4> name : ${country.name.common} </h4>
         <p> name : ${country.capital ? country.capital[0]:'No Capital'} </p>
    
        `;
        countriesContainer.appendChild(countryDiv);
    }
}

loadCountries();