{% extends 'layout.swig' %}

{% block title %}Página de inicio{% endblock %}

{% block head %}
  {% parent %}
  <link rel="stylesheet" type="text/css" href="/stylesheets/home2.css">
  <link rel="stylesheet" type="text/css" href="/stylesheets/pure/grids-responsive-min.css">
{% endblock head %}

{% block content %}
  <div id="layout">
    <div id="main">
      <div class="content">
        <div class="pure-g">
        {% for key, post in posts %}
          <div class="pure-u-1 pure-u-md-1-2 pure-u-xl-1-3">
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
          </div>
        {% endfor %}
        </div>
      </div>
    </div>
  </div>
{% endblock content %}