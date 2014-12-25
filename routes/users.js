var express   = require('express'),
    router    = express.Router(),
    models    = require('../models'),
    sequelize = require('sequelize'),
    async     = require('async'),
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
    res.render('posts_list', { 'posts': posts });
  });
});

router.get('/:alias/posts/edit', utils.tools.checkAuth, function(req, res) {
  var findPost = function(callback) {
    models.Post.find(parseInt(req.param('id'))).success(function(post) {
      return callback(null, post);
    }).error(function() {
      return callback(null, null);
    });
  };

  var showPage = function(err, result) {
    if (err) { throw err; }
    res.render('posts_edit', { 'post': result[0] });
  };

  // 'async.parallel' makes possible that the 'showPage' function runs only 
  // after all functions in the array complete their work.
  async.parallel([findPost], showPage);
});

/**
*
* Recently, 'findOrCreate' changed its behaviour and these changes are not
* documented in Sequelized API yet. Now it takes two arguments instead of three:
*   Model.findOrCreate({ where: where, defaults: defaults}, options);
*   Reference: (https://github.com/sequelize/sequelize/wiki/Upgrading-to-2.0)
*
* Furthermore, it returns only one result (instead of two). The result returned
* is an array with two values:
*   - First value: the object found or created (if where clause didn't find
*     anything).
*   - Second Value: boolean -> true=created; false=found;
*
*/
router.post('/:alias/posts/create', utils.tools.checkAuth, function(req, res) {
  var postIncoming = {
        title: req.param('title'),
        text: req.param('text'),
        userId: req.session.user_id
      },
      where = (req.body.id === '') ? postIncoming : { 'id': parseInt(req.body.id)},
      urlToRedirect = '/user/' + req.params.alias + '/posts';

  models.Post.findOrCreate({
    where: where,
    defaults: {}
  }).then(function(result) {
    if (!result[1]) {
      result[0].updateAttributes(postIncoming).success(function() {
        res.redirect(urlToRedirect);
      }).error(function(err) {
        // This usually happens because an "ER_EMPTY_QUERY" error. This means
        // our loved user didn't change anything when he sent the form.
        console.log('ERROR!!----------->' + err.message);
        res.redirect(urlToRedirect);
      });
    } else {
      res.redirect(urlToRedirect);
    }
  });
});

router.get('/:alias/posts/delete', utils.tools.checkAuth, function(req, res){
  models.Post.find(parseInt(req.param('id'))).then(function(post){
    post.destroy().then(function(){
      res.redirect('/user/' + req.params.alias + '/posts');
    });
  });
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
