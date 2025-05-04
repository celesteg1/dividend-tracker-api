const axios = require('axios');

(async () => {
  try {
    const yamlData = `
      - ticker: AAPL
        paymentDate: 2024-01-15
        amount: 1.50
    `;

    const response = await axios.post('http://localhost:3000/monthly-summary', yamlData, {
      headers: {
        'Content-Type': 'application/x-yaml'
      }
    });

    console.log('Response:', response.data);
  } catch (err) {
    if (err.response) {
      console.error('API responded with error:', err.response.data);
    } else {
      console.error('Request failed:', err.message);
    }
  }
})();
