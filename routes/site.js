var express = require('express'),
    models  = require('../models'),
    router  = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  models.Post.findAll({
    order: 'id DESC'
  }).then(function(posts) {
    res.render('index', { 'posts': posts });
  });
});

module.exports = router;
