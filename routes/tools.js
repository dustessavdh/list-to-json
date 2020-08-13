var express = require('express');
var router = express.Router();

/* GET tools home page. */
router.get('/', function(req, res, next) {
  res.render('tools/tools', { title: 'Tools' });
});

router.get('/list-json', function (req, res, next) {
  res.render('tools/list-json', { title: 'List to JSON'});
});

router.get('/json-json', function (req, res, next) {
  res.render('tools/json-json', { title: 'JSON to JSON'});
});

module.exports = router;
