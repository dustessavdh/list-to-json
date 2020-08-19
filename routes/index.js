const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('layout', {
    title: 'List/JSON to JSON',
    partials: {content: 'index'}
  });
});

module.exports = router;
