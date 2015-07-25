---
layout: page
title: Tablettes
permalink: /tablettes/
baseline: "Duis quam erat, porta in <span>tellus</span> eget, ornare <span>hendrerit</span> nulla.<br>Quisque <span>pretium</span> enim quis justo <span>vehicula</span> congue."
---

<div class="container">
    <div class="row">
        <div class="col-md-3 hidden-sm hidden-xs">
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
        <div class="col-md-9">
            <div class="row" id="Container">

                {% for product in site.data.products %}
                    <div class="col-sm-4 mix category-{{product.name | replace: ' ', '-' | downcase }}" data-price="{{product.price}}" data-date="20130521" data-popularity="3">
                        <div class="ec-box">
                            <div class="ec-box-header"><a href="#">{{product.name}}</a></div>
                            <a href="#"><img src="{{ product.img | prepend: site.baseurl }}" alt=""></a>
                            <div class="ec-box-footer text-center">
                                <a href="#" class="btn btn-ar btn-primary btn-sm"><i class="fa fa-shopping-cart"></i> Louer</a>
                            </div>
                        </div>
                    </div>
                {% endfor %}
            </div>
        </div>
    </div>
</div> <!-- container -->