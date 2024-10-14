const cities = document.querySelectorAll('.city');
const weatherInfo = document.getElementById('weather-info');

cities.forEach(city => {
    city.addEventListener('click', () => {
        const cityName = city.getAttribute('data-city');
        getWeatherData(cityName);
    });
});

// Placeholder function for fetching weather data
function getWeatherData(city) {
    // Mock data (replace with actual API call)
    const mockData = {
        "New York": { temperature: "18°C", condition: "Cloudy", time: "14:00" },
        "London": { temperature: "12°C", condition: "Rainy", time: "19:00" },
        "Tokyo": { temperature: "24°C", condition: "Sunny", time: "08:00" },
        "Sydney": { temperature: "22°C", condition: "Partly Cloudy", time: "05:00" },
        "Paris": { temperature: "16°C", condition: "Foggy", time: "20:00" },
    };

    const data = mockData[city];
    if (data) {
        weatherInfo.innerHTML = `
            <p><strong>City:</strong> ${city}</p>
            <p><strong>Temperature:</strong> ${data.temperature}</p>
            <p><strong>Condition:</strong> ${data.condition}</p>
            <p><strong>Time:</strong> ${data.time}</p>
        `;
    } else {
        weatherInfo.innerHTML = `<p>Weather data not available for ${city}</p>`;
    }
}
