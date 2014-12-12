{% extends 'layout.swig' %}

{% block title %}Express con Swig{% endblock %}

{% block head %}
  {% parent %}
  <link rel="stylesheet" type="text/css" href="/stylesheets/style.css">
{% endblock head %}

{% block content %}

  Este es un ejemplo de cómo {{ title }} funciona con {{ htmlTemplate }}.<br/>

{% endblock content %}