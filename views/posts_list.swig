{% extends 'layout.swig' %}

{% block title %}Lista de artículos{% endblock %}

{% block head %}
  {% parent %}
  <link rel="stylesheet" type="text/css" href="/stylesheets/posts_list.css">
{% endblock head %}

{% block content %}
<div id="content">
  <h1>Listado de posts</h1>
  <p>
    <span>Este es tu listado de posts creados. Para crear uno nuevo: </span>
    <a class="pure-button pure-button-primary" href="posts/edit">Nuevo</a>
  </p>
  {% if posts.length > 0 %}
  <table class="posts-list pure-table-striped">
    <thead>
      <tr>
        <th class="text-left">Id</th>
        <th class="text-left">Título</th>
        <th class="text-right">Acciones</th>
      </tr>
    </thead>
    <tbody>
      {% for post in posts %}
        <tr>
          <td>{{ post.id }}</td>
          <td>{{ post.title }}</td>
          <td class="text-right">
            <button type="button" class="pure-button">Ver</button>
            <button type="button" class="pure-button">Editar</button>
            <button type="button" class="button-red pure-button">Eliminar</button>
          </td>
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