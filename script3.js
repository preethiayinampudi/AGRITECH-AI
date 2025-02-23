function getPestDiseaseInfo() {
    const crop = document.getElementById('crop').value;
    const location = document.getElementById('location').value;
    
    if (crop && location) {
        fetch(`http://localhost:5000/get_pest_disease_info?crop=${crop}&location=${location}`)
            .then(response => response.json())
            .then(data => {
                const infoDiv = document.getElementById('infoResults');
                if (data.info) {
                    infoDiv.innerHTML = `<h3>Pest and Disease Information:</h3><p>${data.info}</p>`;
                } else {
                    infoDiv.innerHTML = `<p>No information available for this crop and location.</p>`;
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('An error occurred while fetching data.');
            });
    } else {
        alert('Please enter both crop and location.');
    }
}
