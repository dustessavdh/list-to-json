const express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

router.post('/save', (req, res, next) => {
  //TODO move this to a new function to save the data
  try {
    data = JSON.parse(req.body.data);
  } catch (err) {
    console.log(err);
    res.status(400).send('This is not json!')
  }
  console.log(data);
  res.send('POST request was good!');
});

module.exports = router;
