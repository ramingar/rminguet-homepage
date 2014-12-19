exports.tools = (function() {
  var checkAuth = function(req, res, next) {
    if ((typeof req.session=='undefined') || !req.session.user_id) {
      res.redirect('/user/login');
    } else {
      // Modifico la cabecera para prevenir que un usuario acceda a una página
      // restringida, por ej., cuando se valida, sale de sesión y le da
      // a volver a atrás en el navegador. Esto le obliga a revalidarse.
      res.header('Cache-Control', 'no-cache, private, no-store, ' +
        'must-revalidate, max-stale=0, post-check=0, pre-check=0');
      next();
    }
  };

  /* Public API */
  return {
    checkAuth : checkAuth
  }
})();
