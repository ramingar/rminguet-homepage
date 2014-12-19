<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Rafael Minguet García - {% block title %}{% endblock %}</title>
  <link rel="stylesheet" type="text/css" href="/stylesheets/pure/pure-min.css">
  <link rel="stylesheet" type="text/css" href="/stylesheets/site.css">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  {% block head %}
  {% endblock %}
</head>
<body>
  <div class="rminguet-menu-sup pure-menu pure-menu-open pure-menu-horizontal">
    <ul>
      <li><a href="/">Inicio</a></li>
      <li><a href="#">Blog</a></li>
      <li><a href="#">Currículum</a></li>
      <li><a href="#">Contacta</a></li>
    </ul>
  </div>
  <div class="banner">
    <h1 class="banner-head">
      Programador front-end / back-end<br>
      <span class="subtitle">Maestro. Profesor de español como L2/LE</span>
    </h1>
  </div>
  {% block content %}{% endblock %}
</body>
<script type="text/javascript" src="/javascripts/zepto.min.js"></script>
</html>