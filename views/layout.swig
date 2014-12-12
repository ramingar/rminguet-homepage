<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>{% block title %}My Site{% endblock %}</title>
  <link rel="stylesheet" type="text/css" href="/stylesheets/pure/pure-min.css">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  {% block head %}
  {% endblock %}
</head>
<body>
  {% block content %}{% endblock %}
</body>
<script type="text/javascript" src="/javascripts/zepto.min.js"></script>
</html>