const axios = require('axios');
const fs = require('fs');
const path = require('path');

const PIXABAY_API_KEY = '47155184-0d8d521302397c2ff9bf38deb';
const DOWNLOAD_DIR = path.join(__dirname, '../public/images');

// Create download directory if it doesn't exist
if (!fs.existsSync(DOWNLOAD_DIR)) {
  fs.mkdirSync(DOWNLOAD_DIR, { recursive: true });
}

const searchTerms = [
  'plumber',
  'plumbing',
  'bathroom',
  'kitchen sink',
  'water heater',
  'pipes',
  'faucet',
  'drain cleaning',
  'plumbing tools',
  'emergency plumbing'
];

async function downloadImage(imageUrl, filename) {
  try {
    const response = await axios({
      url: imageUrl,
      responseType: 'stream',
    });

    const writer = fs.createWriteStream(path.join(DOWNLOAD_DIR, filename));
    response.data.pipe(writer);

    return new Promise((resolve, reject) => {
      writer.on('finish', resolve);
      writer.on('error', reject);
    });
  } catch (error) {
    console.error(`Error downloading ${imageUrl}:`, error.message);
  }
}

async function searchAndDownload() {
  try {
    for (const searchTerm of searchTerms) {
      const response = await axios.get('https://pixabay.com/api/', {
        params: {
          key: PIXABAY_API_KEY,
          q: searchTerm,
          image_type: 'photo',
          per_page: 5, // 5 images per search term = 50 total
          safesearch: true,
          orientation: 'horizontal'
        }
      });

      console.log(`Downloading images for "${searchTerm}"...`);

      for (const [index, image] of response.data.hits.entries()) {
        const filename = `${searchTerm.replace(/\s+/g, '-')}-${index + 1}.jpg`;
        await downloadImage(image.largeImageURL, filename);
        console.log(`Downloaded: ${filename}`);
      }
    }
    console.log('All images downloaded successfully!');
  } catch (error) {
    console.error('Error:', error.message);
  }
}

searchAndDownload();
