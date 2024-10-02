import React, { useState } from 'react';
import axios from 'axios';

const IntervalForm = () => {
  const [interval, setInterval] = useState('*/5 * * * *'); // Default: every 5 minutes

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post('http://localhost:4000/set-interval', { interval })
      .then((response) => {
        alert(response.data);
      })
      .catch((error) => {
        console.error('Error setting interval:', error);
      });
  };

  return (
    <div>
      <h2>Set Monitoring Interval for Whale Transactions</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Cron Interval (e.g., */5 * * * * for every 5 mins):
          <input
            type="text"
            value={interval}
            onChange={(e) => setInterval(e.target.value)}
          />
        </label>
        <button type="submit">Set Interval</button>
      </form>
    </div>
  );
};

export default IntervalForm;
