var express   = require('express'),
    router    = express.Router(),
    models    = require('../models'),
    sequelize = require("sequelize"),
    utils     = require('../utils/utils');

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
  models.Post.findAll({
    include: [ {
      model: models.User, as: 'user',
      where: { id: req.session.user_id, alias: req.params.alias }
    } ]
  }).then(function(posts) {
    res.render('posts_lista', { 'posts': posts });
  });
});

router.get('/:alias/posts/crear', utils.tools.checkAuth, function(req, res) {
  res.render('posts_crear');
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
