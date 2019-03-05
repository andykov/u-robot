$(function() {
    
    // price blur effect
    function blurElement(element, size) {
        var filterVal = 'blur(' + size + 'px)';
         $(element).css({
           'filter':filterVal,
           'webkitFilter':filterVal,
           'mozFilter':filterVal,
           'oFilter':filterVal,
           'msFilter':filterVal,
           'transition':'all 0.5s ease-out',
           '-webkit-transition':'all 0.5s ease-out',
           '-moz-transition':'all 0.5s ease-out',
           '-o-transition':'all 0.5s ease-out'
       });
    }
    
    // button change price tariffs
    $('.js-tariff-period').on('click', function(){

        var period = $(this).attr('data-period');
        $(this).siblings().removeClass('is-link');
        $(this).addClass('is-link');

        $({blurRadius: 0}).animate({blurRadius: 10}, {
            duration: 700,
            easing: 'swing',
            step: function() {
                $('.tariff__price:not(.tariff__price--free) span.show').css({
                    "-webkit-filter": "blur("+this.blurRadius+"px)",
                    "filter": "blur("+this.blurRadius+"px)"
                });
            }
        });
        $({blurRadius: 10}).animate({blurRadius: 0}, {
            duration: 700,
            easing: 'swing',
            step: function() {
                $('.tariff__price:not(.tariff__price--free) span').removeClass('show');
                $('.tariff__price:not(.tariff__price--free) span[data-period-'+ period + ']').addClass('show');
                $('.tariff__price:not(.tariff__price--free) span.show').css({
                    "-webkit-filter": "blur("+this.blurRadius+"px)",
                    "filter": "blur("+this.blurRadius+"px)"
                });
            }
        });
    });

    // sliders
    if ($('.js-case').length) {
        $('.js-case').slick({
            dots: true,
            nextArrow:$('.case .slide-next'),
            prevArrow:$('.case .slide-prev'),
        });
    }

    if ($('.js-reviews').length) {
        $('.js-reviews').slick({
            arrows: false,
            // nextArrow:$('.reviews .slide-next'),
            // prevArrow:$('.reviews .slide-prev'),
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            // asNavFor: '.js-reviews-nav',
        });
    }

    // if ($('.js-reviews-nav').length) {
    //     $('.js-reviews-nav').on('init', function(event, slick){
    //         var current = $(slick.$slides.get(slick.currentSlide));
    //         var currentImg = current.find('img[data-src-color]');
    //         var srcColor = currentImg.attr('data-src-color');
    //         var srcGrey = $(currentImg[0]).attr('src');
    //         $(currentImg[0]).attr('src', srcColor);
    //         $(currentImg[0]).attr('data-src-color', srcGrey);
    //     });
        
    //     $('.js-reviews-nav').slick({
    //         slidesToShow: 4,
    //         slidesToScroll: 1,
    //         asNavFor: '.js-reviews',
    //         dots: false,
    //         arrows: false,
    //         focusOnSelect: true
    //     });

    //     $('.js-reviews-nav').on('afterChange', function(event, slick, currentSlide){
    //         var current = $(slick.$slides.get(slick.currentSlide));
    //         var currentImg = current.find('img[data-src-color]');
    //         var srcColor = currentImg.attr('data-src-color');
    //         var srcGrey = $(currentImg[0]).attr('src');
    //         $(slick.$slides).find('img').attr('src', srcGrey);
    //         $(slick.$slides).find('img').attr('data-src-color', srcColor);
    //         $(currentImg[0]).attr('src', srcColor);
    //         $(currentImg[0]).attr('data-src-color', srcGrey);
    //     });
    // }

    // accordion faq
    $('.js-faq').on('click', function(e) {
        var $this = $(this);
        
        if ($this.next().is(':visible')) {
            $this.next().slideUp(350);
        } else {
            $this.next().slideDown(350);
        }
    });

    AOS.init(); // init scroll animation only after sliders
    
});
