---
layout: page
title: Autre devices
permalink: /autre-devices/
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
              <li><a href="javascript:void(0);" class="filter" data-filter=".category-ipod-touch">iPod Touch</a></li>
              <li><a href="javascript:void(0);" class="filter" data-filter=".category-wiko">Wiko</a></li>
            </ul>
          </div>
        </div>
        <div class="col-md-9">
            <div class="row" id="Container">
                <div class="col-sm-4 mix category-ipod-touch" data-price="64900" data-date="20130521" data-popularity="3">
                    <div class="ec-box">
                        <div class="ec-box-header"><a href="#">iPod Touch</a></div>
                        <a href="#"><img src="{{ '/img/demo/e_img01.jpg' | prepend: site.baseurl }}" alt=""></a>
                        <div class="ec-box-footer text-center">
                            <a href="#" class="btn btn-ar btn-primary btn-sm"><i class="fa fa-shopping-cart"></i> Louer</a>
                        </div>
                    </div>
                </div>
                <div class="col-sm-4 mix category-wiko" data-price="4999" data-date="20130421" data-popularity="8">
                    <div class="ec-box">
                        <div class="ec-box-header"><a href="#">Wiko</a></div>
                        <a href="#"><img src="{{ '/img/demo/e_img02.jpg' | prepend: site.baseurl }}" alt=""></a>
                        <div class="ec-box-footer text-center">
                            <a href="#" class="btn btn-ar btn-primary btn-sm"><i class="fa fa-shopping-cart"></i> Louer</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div> <!-- container -->