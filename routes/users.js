var express = require('express');
    router  = express.Router();
    models  = require('../models');

router.get('/add', function(req, res) {
  models.User.create({ 
    alias: req.param('alias'),
    pass: req.param('pass')
  }).then(function() {
    res.redirect('/');
  });
});

router.get('/check', function(req, res) {
  models.User.find({
    where: { alias: req.param('alias') }
  }).then(function(user) {
    res.redirect('/');
  });
});

module.exports = router;
