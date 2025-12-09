/**
 * Basic Example - Distance Calculator API
 *
 * This example demonstrates how to use the Distance Calculator API.
 * Make sure to set your API key in the .env file or replace '[YOUR_API_KEY]' below.
 */

require('dotenv').config();
const distancecalculatorAPI = require('../index.js');

// Initialize the API client
const api = new distancecalculatorAPI({
    api_key: process.env.API_KEY || '[YOUR_API_KEY]'
});

// Example query
var query = {
  lat1: 36.7783,
  lon1: -119.4179,
  lat2: 34.0522,
  lon2: -118.2437
};

// Make the API request using callback
console.log('Making request to Distance Calculator API...\n');

api.execute(query, function (error, data) {
    if (error) {
        console.error('Error occurred:');
        if (error.error) {
            console.error('Message:', error.error);
            console.error('Status:', error.status);
        } else {
            console.error(JSON.stringify(error, null, 2));
        }
        return;
    }

    console.log('Response:');
    console.log(JSON.stringify(data, null, 2));
});
