const express = require('express');
const write = require('../helpers/write');
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
    res.status(400).send('This is not json!');
  }

  const writeSuccess = write.writeToJson(data);

  if (writeSuccess === 'success') {
    res.send('POST request was good!');
  } else {
    res.status(500).send('There occured an error while trying to save the data');
  }
});

module.exports = router;
