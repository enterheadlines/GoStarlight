const urlParams = new URLSearchParams(window.location.search);
const tmdbId = urlParams.get('tmdb_id');
const type = urlParams.get('type');
const season = urlParams.get('season');
const episode = urlParams.get('episode');
const mediaFrame = document.querySelector('.iframe');
const titleElement = document.querySelector('.desc-titl');
const descriptionElement = document.querySelector('.desc-des');
const creatorElement = document.querySelector('.desc-creato');

async function fetchMediaDetails() {
    try {
        let detailsResponse;
        if (type === 'TV Show' || type === 'Anime') {
            detailsResponse = await fetch(`https://api.themoviedb.org/3/tv/${tmdbId}?api_key=1070730380f5fee0d87cf0382670b255`);
        } else if (type === 'Movie') {
            detailsResponse = await fetch(`https://api.themoviedb.org/3/movie/${tmdbId}?api_key=1070730380f5fee0d87cf0382670b255`);
        }

        if (!detailsResponse.ok) {
            throw new Error('Network response was not ok');
        }

        const detailsData = await detailsResponse.json();

        // Set the title
        titleElement.textContent = type === 'TV Show' || type === 'Anime' ? detailsData.name : detailsData.title;

        // Set the description
        descriptionElement.textContent = detailsData.overview || 'No description available.';

        // Set the creator for TV Shows
        if (type === 'TV Show') {
            creatorElement.textContent = detailsData.created_by ? detailsData.created_by.map(creator => creator.name).join(', ') : 'N/A';
        } else {
            creatorElement.textContent = 'N/A'; // Movies and anime don't have creators in the same way
        }
    } catch (error) {
        console.error('Error fetching media details:', error);
        titleElement.textContent = 'Error loading title';
        descriptionElement.textContent = 'Error loading description';
        creatorElement.textContent = 'N/A';
    }
}

if (type === 'TV Show' && season && episode) {
    mediaFrame.src = `https://player.videasy.net/tv/${tmdbId}/${season}/${episode}`;
} else if (type === 'Anime') {
    mediaFrame.src = `https://player.videasy.net/anime/${tmdbId}`;
} else {
    mediaFrame.src = `https://player.videasy.net/movie/${tmdbId}`;
}

// Fetch media details after setting the iframe source
fetchMediaDetails();
