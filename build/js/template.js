$(function(){$(".js-tariff-period").on("click",function(){var s=$(this).attr("data-period");$(this).siblings().removeClass("is-link"),$(this).addClass("is-link"),$({blurRadius:0}).animate({blurRadius:10},{duration:700,easing:"swing",step:function(){$(".tariff__price span.show").css({"-webkit-filter":"blur("+this.blurRadius+"px)",filter:"blur("+this.blurRadius+"px)"})}}),$({blurRadius:10}).animate({blurRadius:0},{duration:700,easing:"swing",step:function(){$(".tariff__price span").removeClass("show"),$(".tariff__price span[data-period-"+s+"]").addClass("show"),$(".tariff__price span.show").css({"-webkit-filter":"blur("+this.blurRadius+"px)",filter:"blur("+this.blurRadius+"px)"})}})}),$(".js-case").length&&$(".js-case").slick({dots:!0,nextArrow:$(".case .slide-next"),prevArrow:$(".case .slide-prev")}),$(".js-reviews").length&&$(".js-reviews").slick({nextArrow:$(".reviews .slide-next"),prevArrow:$(".reviews .slide-prev"),slidesToShow:1,slidesToScroll:1,dots:!1,asNavFor:".js-reviews-nav"}),$(".js-reviews-nav").length&&($(".js-reviews-nav").on("init",function(s,r){var i=$(r.$slides.get(r.currentSlide)).find("img[data-src-color]"),e=i.attr("data-src-color"),a=$(i[0]).attr("src");$(i[0]).attr("src",e),$(i[0]).attr("data-src-color",a)}),$(".js-reviews-nav").slick({slidesToShow:4,slidesToScroll:1,asNavFor:".js-reviews",dots:!1,arrows:!1,focusOnSelect:!0}),$(".js-reviews-nav").on("afterChange",function(s,r,i){var e=$(r.$slides.get(r.currentSlide)).find("img[data-src-color]"),a=e.attr("data-src-color"),t=$(e[0]).attr("src");$(r.$slides).find("img").attr("src",t),$(r.$slides).find("img").attr("data-src-color",a),$(e[0]).attr("src",a),$(e[0]).attr("data-src-color",t)})),AOS.init()});