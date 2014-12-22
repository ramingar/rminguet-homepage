{% extends 'layout.swig' %}

{% block title %}Edición de post{% endblock %}

{% block head %}
  {% parent %}
  <link rel="stylesheet" type="text/css" href="/stylesheets/posts_edit.css">
{% endblock head %}

{% block content %}
<div id="content">
  <form id="form-post-crear" class="pure-form pure-form-stacked" method="post" action="../posts/create">
    <fieldset>
      <legend>Creación de nuevo artículo</legend>

      <label for="title">Título</label>
      <input id="title" name="title" type="text" placeholder="Título" autofocus>

      <label for="text">Artículo</label>
      <textarea id="text" name="text" placeholder="Texto del artículo"></textarea>
      <br>
      <button type="submit" class="pure-button pure-button-primary">Enviar</button>
      <a class="button-error button-secondary pure-button" href="../posts">Cancelar</a>
    </fieldset>
  </form>
  
  {% if err.length > 0 %}
    <br><span id="error"></span>
  {% endif %}
</div>
{% endblock content %}