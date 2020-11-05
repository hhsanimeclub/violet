var express = require('express');
var router = express.Router();

/* GET privacy policy. */
router.get('/privacy', function(req, res, next) {
  res.render('privacy');
});

module.exports = router;
