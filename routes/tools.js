var express = require('express');
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

router.get('/json-json', function (req, res, next) {
  res.render('layout', {
    title: 'JSON to JSON',
    partials: {content: 'tools/json-json'}
  });
});

module.exports = router;
