---
layout: products
title: Tablettes
permalink: /tablettes/
baseline: "Duis quam erat, porta in <span>tellus</span> eget, ornare <span>hendrerit</span> nulla.<br>Quisque <span>pretium</span> enim quis justo <span>vehicula</span> congue."
---

<div class="container-fluid">
    <div class="row">
        <div class="col-md-2 col-md-offset-1 hidden-sm hidden-xs">
          <div class="ec-filters-menu">
            <h3 class="section-title no-margin-top">{{page.title}}</h3>
            <h4>Modèles</h4>
            <ul>
                <li><a href="javascript:void(0);" class="filter" data-filter="all">Tous</a></li>
                {% for product in site.data.products %}
                    <li><a href="javascript:void(0);" class="filter" data-filter=".category-{{product.name | replace: ' ', '-' | downcase }}">{{product.name}}</a></li>
                {% endfor %}
            </ul>
          </div>
        </div>
        <div class="col-md-5">
            <div class="row" id="Container">

                {% for product in site.data.products %}
                    <div class="col-sm-6 mix category-{{product.name | replace: ' ', '-' | downcase }}" data-price="{{product.price}}">
                        <div class="ec-box">
                            <div class="ec-box-header"><a href="{{site.baseurl}}/{{product.name | replace: ' ', '-' | downcase}}">{{product.name}}</a></div>
                            <a href="{{site.baseurl}}/{{product.name | replace: ' ', '-' | downcase }}"><img src="{{ product.img | prepend: site.baseurl }}" alt="{{product.name }}"></a>
                            <div class="ec-box-footer text-center">
                                <a href="{{site.baseurl}}/{{product.name | replace: ' ', '-' | downcase }}" class="btn btn-ar btn-primary btn-sm"><i class="fa fa-shopping-cart"></i> Ajouter au devis</a>
                            </div>
                        </div>
                    </div>
                {% endfor %}
            </div>
        </div>
        <div class="col-md-3">
            <section>
                <div class="panel panel-primary">
                    <div class="panel-heading"><i class="fa fa-shopping-cart"></i> Devis en ligne</div>
                    <div class="panel-body">
                        <div id="estimate"></div>
                    </div>
                </div>
            </section>
        </div>
        <div class="col-md-1">
        </div>
    </div>
</div> <!-- container -->