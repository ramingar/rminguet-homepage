{% extends 'layout.swig' %}

{% block title %}Página de login{% endblock %}

{% block head %}
  {% parent %}
  <link rel="stylesheet" type="text/css" href="/stylesheets/login.css">
{% endblock head %}

{% block content %}
<div id="content">
  <form id="form-login" class="pure-form pure-form-stacked" method="post" action="/user/check">
    <fieldset>
      <legend>Introduce tu usuario y contraseña:</legend>

      <label for="alias">Usuario</label>
      <input id="alias" name="alias" type="text" placeholder="Usuario" autofocus>

      <label for="pass">Password</label>
      <input id="pass" name="pass" type="password" placeholder="Contraseña">
      <br>
      <button type="submit" class="pure-button pure-button-primary">Entrar</button>
    </fieldset>
  </form>
  {% if err.length > 0 %}
    <br><span id="error">El usuario/contraseña no existe.</span>
  {% endif %}
</div>
{% endblock content %}