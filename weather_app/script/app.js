const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');
const forecast = new Forecast();

const updateUI = (data) => {
    const cityDetails = data.cityDetails;
    const weatherDetails = data.weatherDetails;

    // we can also use destructure properties to save data.cityDetails in cityDetails and data.weatherDetails in weatherDetails

    // const { cityDetails, weatherDetails } = data; 
    // This works if the key and the value name are the same

    // update details template
    details.innerHTML = `
    <h5 class="my-3">${cityDetails.EnglishName}</h5>;
    <div class="my-3">${weatherDetails.WeatherText}</div>;
    <div class="display-4 my-4">
        <span>${weatherDetails.Temperature.Metric.Value}</span>
        <span>&deg;C</span>
    </div>`;

    // remove the display none from the card class if its present
    if(card.classList.contains('d-none')) {
        card.classList.remove('d-none');
    };

    // update the night/day & icon images
    const iconSrc = `img/icons/${weatherDetails.WeatherIcon}.svg`;
    icon.setAttribute('src', iconSrc);

    const dayOrNight = (weatherDetails.IsDayTime) ? 'img/day.svg' : 'img/night.svg';
    time.setAttribute('src', dayOrNight);
};

cityForm.addEventListener('submit', e => {
    // prevent default form action
    e.preventDefault();

    // Get city value
    const city = cityForm.city.value.trim();
    cityForm.reset();

    //update the ui with the city
    forecast.updateCity(city)
        .then(data => updateUI(data))
        .catch(err => console.log(err));

    localStorage.setItem('city', city);
});

if(localStorage.getItem('city')) {
    forecast.updateCity(localStorage.getItem('city'))
        .then((data) => updateUI(data))
        .catch((error) => console.log(error));
}