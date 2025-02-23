$(document).ready(function() {
    // Handle location search
    $('#location-form').on('submit', function(e) {
        e.preventDefault();
        const location = $('#location').val();
        if (location) {
            getWeather(location);
        }
    });

    // Get weather data from OpenWeatherMap
    function getWeather(location) {
        const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API Key
        const weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;

        $.get(weatherApiUrl, function(data) {
            if (data.cod === 200) {
                const weather = data.weather[0].description;
                const temp = (data.main.temp - 273.15).toFixed(2); // Convert Kelvin to Celsius

                $('#weather-report').html(`<strong>Weather:</strong> ${weather}<br><strong>Temperature:</strong> ${temp}°C`);
                suggestCrop(temp, weather);
            } else {
                $('#weather-report').html(`<p>City not found. Please try again.</p>`);
            }
        });
    }

    // Suggest crop based on weather and temperature
    function suggestCrop(temp, weather) {
        let cropSuggestion = '';
        
        // Temperature-based crop recommendations
        if (temp > 25 && weather.includes('clear')) {
            cropSuggestion = 'Ideal for growing tomatoes, peppers, and cucumbers.';
        } else if (temp < 25 && weather.includes('clouds')) {
            cropSuggestion = 'Good for growing lettuce, spinach, and carrots.';
        } else if (temp < 20 && weather.includes('rain')) {
            cropSuggestion = 'Consider growing cabbage, beans, and peas as they thrive in cooler conditions.';
        } else if (temp > 20 && weather.includes('humid')) {
            cropSuggestion = 'Great weather for growing tropical crops like rice, sugarcane, and bananas.';
        } else {
            cropSuggestion = 'Please provide a more specific location for better suggestions.';
        }

        $('#crop-suggestion').text(cropSuggestion);
    }
});
$(document).ready(function() {
    // Handle location search
    $('#location-form').on('submit', function(e) {
        e.preventDefault();
        const location = $('#location').val();
        if (location) {
            getWeather(location);
        }
    });

    // Get weather data based on location
    function getWeather(location) {
        const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API Key
        const weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;

        $.get(weatherApiUrl, function(data) {
            if (data.cod === 200) {
                const weather = data.weather[0].description;
                const temp = (data.main.temp - 273.15).toFixed(2); // Convert Kelvin to Celsius
                const humidity = data.main.humidity;
                const pressure = data.main.pressure;
                const windSpeed = data.wind.speed;

                // Display weather data
                $('#weather-report').html(`
                    <p><strong>Weather:</strong> ${weather}</p>
                    <p><strong>Temperature:</strong> ${temp}°C</p>
                    <p><strong>Humidity:</strong> ${humidity}%</p>
                    <p><strong>Pressure:</strong> ${pressure} hPa</p>
                    <p><strong>Wind Speed:</strong> ${windSpeed} m/s</p>
                `);

                // Suggest crops based on weather data
                suggestCrop(temp, humidity, weather);
            } else {
                $('#weather-report').html('<p>Location not found. Please try again.</p>');
            }
        });
    }

    // Suggest crop based on weather data
    function suggestCrop(temp, humidity, weather) {
        let cropSuggestion = '';

        if (temp > 25 && weather.includes('clear')) {
            cropSuggestion = 'Ideal for growing tropical crops like bananas, rice, and sugarcane.';
        } else if (temp > 20 && temp <= 25 && weather.includes('cloud')) {
            cropSuggestion = 'Great for growing crops like peppers, tomatoes, cucumbers, and lettuce.';
        } else if (temp > 15 && temp <= 20 && weather.includes('rain')) {
            cropSuggestion = 'Perfect for growing cool-weather crops like spinach, broccoli, peas, and carrots.';
        } else if (temp <= 15 && humidity > 70) {
            cropSuggestion = 'Cold-weather crops like cabbage, kale, and potatoes thrive in these conditions.';
        } else if (humidity < 40) {
            cropSuggestion = 'Dry conditions are good for drought-tolerant crops like millet, sorghum, and lentils.';
        } else {
            cropSuggestion = 'Please provide a more specific location for better suggestions.';
        }

        $('#crop-suggestions').text(`Recommended Crops: ${cropSuggestion}`);
    }
});
$(document).ready(function() {
    // Handle location search
    $('#location-form').on('submit', function(e) {
        e.preventDefault();
        const location = $('#location').val();
        if (location) {
            getWeather(location);
        }
    });

    // Get weather data based on location
    function getWeather(location) {
        const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API Key
        const weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;

        $.get(weatherApiUrl, function(data) {
            if (data.cod === 200) {
                const weather = data.weather[0].description;
                const temp = (data.main.temp - 273.15).toFixed(2); // Convert Kelvin to Celsius
                const humidity = data.main.humidity;
                const pressure = data.main.pressure;
                const windSpeed = data.wind.speed;

                // Display weather data
                $('#weather-report').html(`
                    <p><strong>Weather:</strong> ${weather}</p>
                    <p><strong>Temperature:</strong> ${temp}°C</p>
                    <p><strong>Humidity:</strong> ${humidity}%</p>
                    <p><strong>Pressure:</strong> ${pressure} hPa</p>
                    <p><strong>Wind Speed:</strong> ${windSpeed} m/s</p>
                `);

                // Suggest crops based on weather data
                suggestCrop(temp, humidity, weather);
            } else {
                $('#weather-report').html('<p>Location not found. Please try again.</p>');
            }
        });
    }

    // Suggest crop based on weather data
    function suggestCrop(temp, humidity, weather) {
        let cropSuggestion = '';

        if (temp > 25 && weather.includes('clear')) {
            cropSuggestion = 'Ideal for growing tropical crops like bananas, rice, and sugarcane.';
        } else if (temp > 20 && temp <= 25 && weather.includes('cloud')) {
            cropSuggestion = 'Great for growing crops like peppers, tomatoes, cucumbers, and lettuce.';
        } else if (temp > 15 && temp <= 20 && weather.includes('rain')) {
            cropSuggestion = 'Perfect for growing cool-weather crops like spinach, broccoli, peas, and carrots.';
        } else if (temp <= 15 && humidity > 70) {
            cropSuggestion = 'Cold-weather crops like cabbage, kale, and potatoes thrive in these conditions.';
        } else if (humidity < 40) {
            cropSuggestion = 'Dry conditions are good for drought-tolerant crops like millet, sorghum, and lentils.';
        } else {
            cropSuggestion = 'Please provide a more specific location for better suggestions.';
        }

        $('#crop-suggestions').text(`Recommended Crops: ${cropSuggestion}`);
    }
});

document.getElementById('cropForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Get the selected values from the form
    const weather = document.getElementById('weather').value;
    const soilType = document.getElementById('soilType').value;
    const irrigation = document.getElementById('irrigation').value;

    let page = 'default.html'; // Default page for unmatched conditions

    // Determine the correct page based on conditions
    if (weather === 'sunny' && soilType === 'loamy' && irrigation === 'high') {
        page = 'page5.html'; // Sunny, Loamy, High irrigation
    } else if (weather === 'rainy' && soilType === 'clayey' && irrigation === 'low') {
        page = 'page9.html'; // Rainy, Clayey, Low irrigation
    } else if (weather === 'humid' && soilType === 'loamy' && irrigation === 'high') {
        page = 'page7.html'; // Humid, Loamy, High irrigation
    } else if (weather === 'sunny' && soilType === 'clayey' && irrigation === 'low') {
        page = 'page8.html'; // Sunny, Clayey, Low irrigation
    } else if (weather === 'sunny' && soilType === 'clayey' && irrigation === 'high') {
        page = 'page11.html'; // Sunny, Clayey, High irrigation
    } else if (weather === 'sunny' && soilType === 'loamy' && irrigation === 'low') {
        page = 'page12.html'; // Sunny, Loamy, Low irrigation
    } else if (weather === 'rainy' && soilType === 'loamy' && irrigation === 'low') {
        page = 'page14.html'; // Rainy, Loamy, Low irrigation
    } else if (weather === 'rainy' && soilType === 'loamy' && irrigation === 'high') {
        page = 'page6.html'; // Rainy, Loamy, High irrigation
    } else if (weather === 'rainy' && soilType === 'clayey' && irrigation === 'high') {
        page = 'page13.html'; // Rainy, Clayey, High irrigation
    } else if (weather === 'humid' && soilType === 'loamy' && irrigation === 'low') {
        page = 'page16.html'; // Humid, Loamy, Low irrigation
    } else if (weather === 'humid' && soilType === 'clayey' && irrigation === 'low') {
        page = 'page10.html'; // Humid, Clayey, Low irrigation
    } else if (weather === 'humid' && soilType === 'clayey' && irrigation === 'high') {
        page = 'page15.html'; // Humid, Clayey, High irrigation
    }

    // Redirect to the selected page
    window.location.href = page;
});
