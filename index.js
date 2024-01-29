const axios = require('axios');

function triggerWebsite() {
  // Replace the URL with the website you want to trigger
  const websiteURL = 'https://jrytdl.netlify.app/';

  // Make a GET request using axios
  axios.get(websiteURL)
    .then(response => {
      console.log('Website triggered successfully.');
    })
    .catch(error => {
      console.error('Error triggering website. Error:', error.message);
    });
}

// Trigger the website every 10 minutes (600,000 milliseconds)
setInterval(triggerWebsite, 600000);
