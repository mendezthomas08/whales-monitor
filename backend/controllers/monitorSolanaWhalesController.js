
const cron = require('node-cron');



const monitorSolanaWhales = require('../services/MonitorSolanaWhalesServices.js')




//------------ MonitorSolanaWhales ------------//
exports.monitorSolanaWhales = async (req, res) => {
    const { interval } = req.body;

    if (cronJob) cronJob.stop(); // Stop any existing cron job
  
    // Schedule new cron job based on the interval from the frontend
    cronJob = cron.schedule(interval, monitorSolanaWhales, {
      scheduled: true,
      timezone: 'Asia/Kolkata',
    });
  
    res.send(`Monitoring started with interval: ${interval}`);
}

