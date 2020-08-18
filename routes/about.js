var express = require('express');
var router = express.Router();

/* GET about page. */
router.get('/', (req, res, next) => {
  res.render('layout', {
      title: 'About',
      partials: {content: 'about/about'}
    });
});

module.exports = router;
