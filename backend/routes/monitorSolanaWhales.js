const express = require('express');
const router = express.Router();

// //------------ Importing Controllers ------------//
 const monitorSolanaWhalesController= require('../controllers/monitorSolanaWhalesController')

router.post('/set-interval', monitorSolanaWhalesController.monitorSolanaWhales);


module.exports = router;