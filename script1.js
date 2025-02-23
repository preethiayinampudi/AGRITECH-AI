// Chatbot functionality
$(document).ready(function() {
    $('#send-btn').on('click', function() {
        var userInput = $('#user-input').val();
        if (userInput) {
            $('#chat-box').append("<div><strong>You:</strong> " + userInput + "</div>");
            $('#user-input').val('');
            $('#chat-box').scrollTop($('#chat-box')[0].scrollHeight);

            // AI-based response (for simplicity, it's a placeholder)
            setTimeout(function() {
                var botResponse = getAIResponse(userInput);
                $('#chat-box').append("<div><strong>Bot:</strong> " + botResponse + "</div>");
                $('#chat-box').scrollTop($('#chat-box')[0].scrollHeight);
            }, 1000);
        }
    });
});

// Placeholder function for AI response
function getAIResponse(input) {
    // AI model could be called here (via API)
    if (input.toLowerCase().includes('crop')) {
        return "You can plant rice or wheat depending on the weather conditions.";
    } else if (input.toLowerCase().includes('weather')) {
        return "The weather is favorable for planting tomatoes.";
    } else {
        return "I can help you with crop recommendations, pest predictions, and more!";
    }
}
document.getElementById('location-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const location = document.getElementById('location').value;

    fetch('http://localhost:3000/api/get-crop-recommendation', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ location })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('weather-report').innerHTML = `
            Temperature: ${data.temperature}°C<br>
            Humidity: ${data.humidity}%<br>
            Recommended Crops: ${data.cropRecommendation}
        `;
    })
    .catch(error => console.error('Error:', error));
});
