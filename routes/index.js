const express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

router.post('/save', (req, res, next) => {
  console.log('Got a POST request');
  res.send('Got a POST request');
});

module.exports = router;
