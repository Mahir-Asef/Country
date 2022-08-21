
//fetching country data
const fetchCountries=()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res=>res.json())
    .then(data=>showCountries(data))
};
fetchCountries();


//All Countries 
const showCountries=(countries)=>{
    // console.log(countries);
   countries.forEach(country=>{
    // console.log(country)
    const coutriesDiv=document.getElementById('countries');
    const div = document.createElement('div');
    div.classList.add('country');
    div.innerHTML=`
        <h3>Country Name : ${country.name.common}</h3>
        <p>Capital : ${country.capital}</p>
        <button onclick="showCotryDetails('${country.name.common}')">Show Details</button>
`;
    coutriesDiv.appendChild(div);
   })
}

// Specific country details
const showCotryDetails=(name)=>{
    const url = (`https://restcountries.com/v3.1/name/${name}`)
    // console.log(url);
    fetch(url)
    .then(res=>res.json())
    .then(data=>showCountryDetails(data[0]))
}

const showCountryDetails= (country)=>{
    console.log(country);
    const details =document.getElementById('country-details');
    details.innerHTML=`
    <p>Capital : ${country.name.common}</p>
    <p>Population : ${country.population}</p>
    <img width='200px' src=${country.flags.png} alt="" srcset="">
    `;
}