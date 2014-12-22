{% extends 'layout.swig' %}

{% block title %}Página de inicio{% endblock %}

{% block head %}
  {% parent %}
  <link rel="stylesheet" type="text/css" href="/stylesheets/home.css">
{% endblock head %}

{% block content %}
  <div id="layout">
    <div id="menu-lateral-izq">
      <div class="rminguet-menu-lat-izq pure-menu pure-menu-open">
        <ul>
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Currículum</a></li>
          <li><a href="#">Contacta</a></li>
        </ul>
      </div>
    </div>

    <div id="main">
      <div class="content">
        {% for post in posts %}
        <article>
          <aside class="article-info-lat">
            <ul>
              <li class="article-date">
                <div class="date-globo">
                  <div class="date-content">
                    <div class="date-month">{{ post.date | date('m') |
                      month_spanish | truncate(3,'') | capitalize }}</div>
                    <div class="date-day">{{ post.date | date('d') }}</div>
                    <div class="date-year">{{ post.date | date('Y') }}</div>
                  </div>
                </div>
              </li>
            </ul>
          </aside>
          <header class="article-head"><h2>{{ post.title }}</h2></header>
          <section class="article-content">
            <p>{{ post.text | safe | truncate }}</p>
          </section>
          <div class="article-tags"></div>
        </article>
        {% endfor %}
      </div>
    </div>
  </div>




{% endblock content %}