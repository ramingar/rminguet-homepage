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
        <article>
          <aside class="article-info-lat">
            <ul>
              <li class="article-date">
                <div class="date-globo">
                  <div class="date-content">
                    <div class="date-month">dic</div>
                    <div class="date-day">20</div>
                    <div class="date-year">2014</div>
                  </div>
                </div>
              </li>
            </ul>
          </aside>
          <header class="article-head"><h2>Este es el título súper chachipí de la muerte</h2></header>
          <section class="article-content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus interdum blandit urna at porta. Praesent sodales mi turpis, ac congue nisi ornare id. Etiam fermentum id nisi vitae ultrices. Fusce sit amet ultricies mauris, quis facilisis augue. Mauris at mi faucibus, finibus nisl ac, ullamcorper leo. Nullam vestibulum ultrices ipsum sit amet vehicula. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla facilisi. Proin et diam at orci laoreet sollicitudin. Quisque lacinia ante id felis aliquam tempor.
            </p>
          </section>
          <div class="article-tags">node.js express html css</div>
        </article>
        <article>
          <aside class="article-info-lat">
            <ul>
              <li class="article-date">
                <div class="date-globo">
                  <div class="date-content">
                    <div class="date-month">dic</div>
                    <div class="date-day">20</div>
                    <div class="date-year">2014</div>
                  </div>
                </div>
              </li>
            </ul>
          </aside>
          <header class="article-head"><h2>Este es el título</h2></header>
          <section class="article-content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus interdum blandit urna at porta. Praesent sodales mi turpis, ac congue nisi ornare id. Etiam fermentum id nisi vitae ultrices. Fusce sit amet ultricies mauris, quis facilisis augue. Mauris at mi faucibus, finibus nisl ac, ullamcorper leo. Nullam vestibulum ultrices ipsum sit amet vehicula. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla facilisi. Proin et diam at orci laoreet sollicitudin. Quisque lacinia ante id felis aliquam tempor.
            </p>
          </section>
          <div class="article-tags">node.js express html css</div>
        </article>
      </div>
    </div>
  </div>




{% endblock content %}