const apiKey = 'YOUR_GOOGLE_API_KEY';
const cx = 'YOUR_CUSTOM_SEARCH_ENGINE_ID';
const searchInput = document.getElementById('search-input');
const resultsContainer = document.getElementById('results-container');
const backButton = document.getElementById('back-button');

function searchGoogle() {
    const query = searchInput.value;
    if (query) {
        const url = `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${cx}&q=${query}`;
        
        fetch(url)
            .then(response => response.json())
            .then(data => {
                displayResults(data);
            })
            .catch(error => console.error('Error:', error));

        // Display back button
        backButton.style.display = 'block';
    }
}

function goBack() {
    // Handle going back to the previous page or any other action you desire
    // In this example, let's go back to the home page
    window.location.href = "../index.html";
}


function displayResults(data) {
    resultsContainer.innerHTML = '';

    if (data.items && data.items.length > 0) {
        data.items.forEach(item => {
            const resultDiv = document.createElement('div');
            resultDiv.classList.add('result');
            resultDiv.innerHTML = `<h3><a href="${item.link}" target="_blank">${item.title}</a></h3>
                                  <p>${item.snippet}</p>`;
            resultsContainer.appendChild(resultDiv);
        });
    } else {
        resultsContainer.innerHTML = '<p>Tidak ada hasil yang ditemukan.</p>';
    }
}

function goBack() {
    resultsContainer.innerHTML = '';
    searchInput.value = '';
    backButton.style.display = 'none';
}
