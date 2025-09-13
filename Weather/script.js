const cityCoordinates = {
  "New York": { lat: 40.7128, lon: -74.0060 },
  "Los Angeles": { lat: 34.0522, lon: -118.2437 },
  "Chicago": { lat: 41.8781, lon: -87.6298 },
  "Houston": { lat: 29.7604, lon: -95.3698 },
  "Phoenix": { lat: 33.4484, lon: -112.0740 }
};

async function getWeather(city) {
  if (!cityCoordinates[city]) {
    document.getElementById("weather").innerHTML = "<p>City not found!</p>";
    return;
  }

  const { lat, lon } = cityCoordinates[city];
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error('Network response was not ok');

    const data = await response.json();
    displayWeather(city, data);
  } catch (error) {
    console.error('Fetch error:', error);
    document.getElementById("weather").innerHTML = "<p>Error fetching weather data.</p>";
  }
}

function displayWeather(city, data) {
  const weather = data.current_weather;
  document.getElementById("weather").innerHTML = `
    <div class="weather-card">
      <h3>Weather in ${city}</h3>
      <p>Temperature: <span>${weather.temperature} °C</span></p>
      <p>Wind Speed: <span>${weather.windspeed} m/s</span></p>
      <p>Wind Direction: <span>${weather.winddirection}°</span></p>
    </div>
  `;
}

// Attach event listener to button
document.getElementById("fetchBtn").addEventListener("click", () => {
  const city = document.getElementById("cityInput").value.trim();
  getWeather(city);
});
