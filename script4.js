document.addEventListener('DOMContentLoaded', function() {
    // Handle form submission
    document.getElementById('weather-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission behavior

        const location = document.getElementById('location').value;

        // Clear previous weather info
        document.getElementById('weather-info').innerHTML = '';

        // Fetch weather data from the backend API
        fetch('http://localhost:3000/api/get-weather', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ location })
        })
        .then(response => response.json())
        .then(data => {
            // Handle the response and display weather information
            if (data.error) {
                // If there's an error, display the error message
                document.getElementById('weather-info').innerHTML = `
                    <p>Error: ${data.error}</p>
                `;
            } else {
                // Display weather information
                document.getElementById('weather-info').innerHTML = `
                    <h2>Weather in ${data.location}</h2>
                    <p><strong>Temperature:</strong> ${data.temperature}°C</p>
                    <p><strong>Humidity:</strong> ${data.humidity}%</p>
                    <p><strong>Weather:</strong> ${data.weatherDescription}</p>
                    <p><strong>Wind Speed:</strong> ${data.windSpeed} m/s</p>
                `;
            }
        })
        .catch(error => {
            // In case of a network error or other issues, show an error message
            console.error('Error fetching weather data:', error);
            document.getElementById('weather-info').innerHTML = `
                <p>Error: Unable to fetch weather data. Please try again later.</p>
            `;
        });
    });
});
