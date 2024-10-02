const axios = require('axios');



// Function to monitor top whale accounts on Solana
 exports.monitorSolanaWhales = async () => {
// Replace with your Bitquery API Key
const BITQUERY_API_KEY = 'YOUR_BITQUERY_API_KEY';
const BINANCE_NETWORK = 'bsc';

// Store cron job dynamically
let cronJob = null;
  try {
    const query = `
    {
      ethereum(network: ${BINANCE_NETWORK}) {
        transfers(
          options: {limit: 10, desc: "amount"},
          currency: {is: "BNB"},
          amount: {gt: 1000}
        ) {
          sender {
            address
          }
          receiver {
            address
          }
          amount
        }
      }
    }`;

    const response = await axios.post(
      'https://graphql.bitquery.io/',
      { query },
      {
        headers: {
          'Content-Type': 'application/json',
          'X-API-KEY': BITQUERY_API_KEY,
        },
      }
    );

    console.log('Top Whale Transactions:', response.data.data.ethereum.transfers);
  } catch (error) {
    console.error('Error fetching whale transactions:', error);
  }
};

