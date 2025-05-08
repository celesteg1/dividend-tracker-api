const axios = require('axios');

(async () => {
  try {
    const response = await axios.get('http://localhost:3000/');
    console.log('Health check successful:', response.data);
  } catch (err) {
    if (err.response) {
      console.error('API responded with error:', err.response.status, err.response.data);
    } else {
      console.error('Health check failed:', err.message);
    }
  }
})();