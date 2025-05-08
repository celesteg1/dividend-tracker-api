const axios = require('axios');

axios.post('http://localhost:3000/monthly-summary', [
  { ticker: 'AAPL', paymentDate: '2025-01-15', amount: 0.22 },
  { ticker: 'MSFT', paymentDate: '2025-02-20', amount: 0.30 },
  { ticker: 'JPM' , paymentDate: '2025-02-22', amount: 0.11 }
])
.then(res => console.log(res.data))
.catch(err => console.error(err));

