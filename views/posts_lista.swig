{% extends 'layout.swig' %}

{% block title %}Lista de artículos{% endblock %}

{% block head %}
  {% parent %}
  <link rel="stylesheet" type="text/css" href="#">
{% endblock head %}

{% block content %}
<div id="content">
  <h1>Listado de posts</h1>
  <p>
    <span>Este es tu listado de posts creados. Para crear uno nuevo: </span>
    <a class="pure-button pure-button-primary" href="posts/crear">Nuevo</a>
  </p>
  {% if posts.length > 0 %}
  <table class="pure-table-striped">
    <thead>
      <tr>
        <th>id</th>
      </tr>
    </thead>
    <tbody>
      {% for post in posts %}
        <tr>
          <td>{{ post.id }}</td>
          <td>{{ post.title }}</td>
          <td><button type="button" class="pure-button pure-button-primary">Ver</button></td>
          <td><button type="button" class="pure-button pure-button-primary">Editar</button></td>
          <td><button type="button" class="pure-button pure-button-primary">Eliminar</button></td>
        </tr>
      {% endfor %}
    </tbody>
  </table>
  {% endif %}
  
  {% if err.length > 0 %}
    <br><span id="error"></span>
  {% endif %}
</div>
{% endblock content %}