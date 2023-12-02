function getWeather() {
    const cityInput = document.getElementById('cityInput').value;
    const apiKey = '0f92d54f569af36dcb1d6e5553260f38'; // Need to insert with API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())//here json is used as transmitter
        .then(data => {
            const cityName = data.name;
            const temperature = data.main.temp;
            const description = data.weather[0].description;

            document.getElementById('cityName').textContent = cityName;
            document.getElementById('temperature').textContent = `${temperature}°C`;
            document.getElementById('description').textContent = description;

            document.getElementById('weatherInfo').style.display = 'block';
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            alert('Error fetching weather data. Please try again.');
        });
}