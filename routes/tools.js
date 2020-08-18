var express = require('express');
var axios = require('axios');
var createError = require('http-errors');
var router = express.Router();

/* GET tools home page. */
router.get('/', (req, res, next) => {
  res.render('layout', {
    title: 'Tools',
    partials: {content: 'tools/tools'}
  });
});

router.get('/list-json', (req, res, next) => {
  res.render('layout', {
    title: 'List to JSON',
    partials: {content: 'tools/list-json'}
  });
});

router.post('/list-json/submit', (req, res, next) => {
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

router.get('/json-json', (req, res, next) => {
  res.render('layout', {
    title: 'JSON to JSON',
    partials: {content: 'tools/json-json'}
  });
});

router.post('/json-json/submit', (req, res, next) => {
  //TODO less dirty 💩
  axios.get(req.body.reqUrl)
  .then(response => {
    res.cookie('rawJson', JSON.stringify(response.data, null, 2));
    res.redirect('/tools/json-json/results');
  })
  .catch(err => {
    console.log(err);
    //TODO add usefull message
    next(createError(400));
  });
});

router.get('/json-json/results', (req, res, next) => {
  res.render('layout', {
    title: 'JSON Results',
    rawJson: req.cookies.rawJson,
    partials: {content: 'tools/json-results'}
  });
});

module.exports = router;
