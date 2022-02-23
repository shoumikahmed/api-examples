const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}
loadCountries()

const displayCountries = countries => {
    const countriesDiv = document.getElementById('countries')
    countries.forEach(country => {
        console.log(country)
        const div = document.createElement('div')
        div.classList.add('country')
        div.innerHTML = `
        <h3>${country.name.common}</h3>
        <p>${country.capital}</p>
        <button onclick="loadCountriesByName('${country.name.common}')">Details</button>
        `
        // const h3 = document.createElement('h3')
        // h3.innerText = country.name.common
        // div.appendChild(h3)
        // const p = document.createElement('p')
        // p.innerText = country.capital
        // div.appendChild(p)
        countriesDiv.appendChild(div)
    })
}
const loadCountriesByName = name => {
    const url = `https://restcountries.com/v3.1/name/${name}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountriesDetail(data[0]))
}

const displayCountriesDetail = country => {
    const countryDetails = document.getElementById('country-details')
    countryDetails.innerHTML = `
    <h5>${country.name.common}</h5>
    <p>population: ${country.population}</p>
    <img width="200px" src="${country.flags.png}">
    `
}
