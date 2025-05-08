# 📈 Dividend Tracker API

![Version](https://img.shields.io/github/v/release/celesteg1/dividend-tracker-api)
![License: MIT](https://img.shields.io/github/license/celesteg1/dividend-tracker-api)
![Last Commit](https://img.shields.io/github/last-commit/celesteg1/dividend-tracker-api)

The Dividend Tracker API is a lightweight REST API that processes dividend payment data and returns monthly totals for each year. It’s designed to help track dividend income over time.

---

## ✨ Features

- Accepts a list of dividend payments via POST
- Aggregates totals by month
- Handles basic input validation
- Returns structured JSON output

---

## 🛠️ Tech Stack

- Node.js
- Express.js

---

## 📦 Installation

### 🛠️ Prerequisites

Install [Node.js and npm](https://nodejs.org/en). 

💡 When you install Node.js, it automatically installs npm (Node Package Manager).


### 📝 Steps

#### Clone the repository

```bash
git clone https://github.com/celesteg1/dividend-tracker-api.git
cd dividend-tracker-api
```

#### Install dependencies

This will install all required packages listed in package.json, including Express.

```bash
npm install
```

#### Start the server

The API will be available at http://localhost:3000.

```bash
npm start
```

#### Run the test script

```bash
npm test
```

If the server started correctly you will see the test output below:

```json
{ '2025-01': 0.22, '2025-02': 0.41 }
```


## 📮 API Endpoint

### `POST /monthly-summary`

Submit an array of dividend records and receive monthly totals.

#### ✅ Example Request Body (JSON)

```json
[
   { "ticker": "AAPL", "paymentDate": "2024-01-15", "amount": 1.5 },
   { "ticker": "MSFT", "paymentDate": "2024-01-20", "amount": 2.0 },
   { "ticker": "JPM",  "paymentDate": "2024-05-16", "amount": 0.20 },
   { "ticker": "ASOS", "paymentDate": "2024-05-28", "amount": 0.07 }
]
```

#### ➡️Example Curl command

To POST the example body to the API, open your command prompt and paste below curl command in the prompt.

```bash
# To run the following curl command, paste it into your terminal (ensure curl is installed).
curl -X POST http://localhost:3000/monthly-summary -H "Content-Type: application/json" -d "[{ \"ticker\": \"AAPL\", \"paymentDate\": \"2024-01-15\", \"amount\": 1.5 }, { \"ticker\": \"MSFT\", \"paymentDate\": \"2024-01-20\", \"amount\": 2.0 }, { \"ticker\": \"JPM\", \"paymentDate\": \"2024-05-16\", \"amount\": 0.20 }, { \"ticker\": \"ASOS\", \"paymentDate\": \"2024-05-28\", \"amount\": 0.07 }]"
```

#### 🔄 Example Response

The curl command will return the json response below:

```json
{"2024-01":3.5,"2024-05":0.27}
```

#### ❌ Invalid Input Example

You must post your dividend data as a JSON array.

Invalid POST Example (YAML is not supported):

```yaml
- ticker: AAPL
  paymentDate: 2024-01-15
  amount: 1.5
```

Output:
```json
{
  "error": "Invalid JSON. Please check your request body format."
}
```


## 🧪 Testing

You can optionally test this API using the JavaScript files provided.

### To test the health of the API (test-health.js)

Responds with "Health check successful" if it can reach the endpoint "http://localhost:3000/".

```bash
node test-health.js
```

Test response:

```bash
Health check successful: Hello API!
```

### To test valid requests (test-valid.js)

Responds with the aggregated monthly totals in JSON format.

```bash 
node test-valid.js
```

Test response:

```bash
{ '2025-01': 0.22, '2025-02': 0.41 }
```

### To test invalid requests (test-invalid.js)

Responds with "Invalid JSON. Please check your request body format." error message.

```bash
node test-invalid.js
```

Test response:

```bash
API responded with error: {
  error: 'Expected application/json. Please check your request content type.'
}
```

### 📁 Project Structure

```pgsql
dividend-tracker-api/
├── index.js
├── package.json
├── test-health.js
├── test-valid.js
├── test-invalid.js
└── README.md

```

## 🤝 Contributing

If you'd like to contribute to this project:

1. **Fork the repository**: This will create a copy of the project on your GitHub account, where you can make changes freely.
2. **Make your changes**: Add new features, fix bugs, or improve documentation in your forked repository.
3. **Submit a pull request**: Once you're happy with your changes, submit a pull request to propose merging your changes into the original repository. I’ll review and discuss your changes before deciding whether to merge them.
4. **Open an issue**: If you encounter any bugs or have suggestions for improvements, feel free to open an issue in this repository. This helps track tasks or problems with the project.


## License
MIT License. See LICENSE for more details.