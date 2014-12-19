var express = require('express'),
    router  = express.Router(),
    models  = require('../models'),
    utils   = require('../utils/utils');

router.get('/add', function(req, res) {
  models.User.create({ 
    alias: req.param('alias'),
    pass: req.param('pass')
  }).then(function() {
    res.redirect('/');
  });
});

router.post('/check', function(req, res) {
  models.User.find({
    where: { alias: req.body.alias }
  }).then(function(user) {
    if (user && user.isValidPassword(req.body.pass)) {
      req.session.user_id = user.getDataValue('id');
      res.redirect('/user/' + user.getDataValue('alias') + '/posts');
    } else {
      res.redirect('/user/login?err=true');
    } 
  });
});

router.get('/:alias/posts', utils.tools.checkAuth, function(req, res) {
  res.send('BIIIEEEEEENNNNNN!!!!' + req.params.alias);
});

router.get('/login', function(req, res) {
  res.render('login', { err: req.param('err') });
});

router.get('/logout', function(req, res) {
  if (!(typeof req.session.user_id=='undefined')) {
    delete req.session.user_id;
  }
  res.redirect('/user/login');
});

module.exports = router;
