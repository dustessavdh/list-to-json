var express = require('express');
var axios = require('axios');
var createError = require('http-errors');
var router = express.Router();

/* GET tools home page. */
router.get('/', function(req, res, next) {
  res.render('layout', {
    title: 'Tools',
    partials: {content: 'tools/tools'}
  });
});

router.get('/list-json', function (req, res, next) {
  res.render('layout', {
    title: 'List to JSON',
    partials: {content: 'tools/list-json'}
  });
});

router.post('/list-json/submit', function (req, res, next) {
  //TODO less dirty 💩
  axios.get(req.body.reqUrl)
  .then(response => {
    console.log(response.data);
    res.redirect('/tools/list-json');
  })
  .catch(err => {
    console.log(err);
    //TODO add usefull message
    next(createError(400));
  });
});

router.get('/json-json', function (req, res, next) {
  res.render('layout', {
    title: 'JSON to JSON',
    partials: {content: 'tools/json-json'}
  });
});

router.post('/json-json/submit', function (req, res, next) {
  //TODO less dirty 💩
  axios.get(req.body.reqUrl)
  .then(response => {
    console.log(response.data);
    res.redirect('/tools/json-json');
  })
  .catch(err => {
    console.log(err);
    //TODO add usefull message
    next(createError(400));
  });
});

module.exports = router;
