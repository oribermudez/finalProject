var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/newticket', function(req, res, next) {
  res.render('index', { title: 'TechTracking' });
});

module.exports = router;
