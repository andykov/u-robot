$(function() {

    
    
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
                $('.tariff__price span.show').css({
                    "-webkit-filter": "blur("+this.blurRadius+"px)",
                    "filter": "blur("+this.blurRadius+"px)"
                });
            }
        });
        $({blurRadius: 10}).animate({blurRadius: 0}, {
            duration: 700,
            easing: 'swing',
            step: function() {
                $('.tariff__price span').removeClass('show');
                $('.tariff__price span[data-period-'+ period + ']').addClass('show');
                $('.tariff__price span.show').css({
                    "-webkit-filter": "blur("+this.blurRadius+"px)",
                    "filter": "blur("+this.blurRadius+"px)"
                });
            }
        });
    });


        var allVideos = $("iframe[src^='//player.vimeo.com'], iframe[src^='//www.youtube.com'], object, embed"),
        fluidEl = $("figure");
        console.log(allVideos);
        allVideos.each(function() {
    
          $(this)
            // jQuery .data does not work on object/embed elements
            .attr('data-aspectRatio', this.height / this.width)
            .removeAttr('height')
            .removeAttr('width');
    
        });
    
        $(window).resize(function() {
            console.Log('1111');
          var newWidth = fluidEl.width();
          allVideos.each(function() {
    
            var elel = $(this);
            elel
                .width(newWidth)
                .height(newWidth * elel.attr('data-aspectRatio'));
    
          });
    
        }).resize();


    //     // $().attr('data-period-'+ period).animate({
    //     //     blurRadius: 5
    //     //   }, 2000, function() {
    //     //     // Анимация завершена.
    //     //     console.log('blur');
    //     //   });
    //     // function percent(number) {

    //     //     var percent = "30"; // Необходимый процент
    //     //     var number_percent = 4999 / 100 * percent;
            
    //     //     return Number(number_percent) + Number(4999);
            
    //     // }
        
    //     // var new_price = percent("1000"); // Новая цена
    // });

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
            nextArrow:$('.reviews .slide-next'),
            prevArrow:$('.reviews .slide-prev'),
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            asNavFor: '.js-reviews-nav',
        });
    }

    if ($('.js-reviews-nav').length) {
        $('.js-reviews-nav').on('init', function(event, slick){
            var current = $(slick.$slides.get(slick.currentSlide));
            var currentImg = current.find('img[data-src-color]');
            var srcColor = currentImg.attr('data-src-color');
            var srcGrey = $(currentImg[0]).attr('src');
            $(currentImg[0]).attr('src', srcColor);
            $(currentImg[0]).attr('data-src-color', srcGrey);
        });
        
        $('.js-reviews-nav').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            asNavFor: '.js-reviews',
            dots: false,
            arrows: false,
            focusOnSelect: true
        });

        $('.js-reviews-nav').on('afterChange', function(event, slick, currentSlide){
            var current = $(slick.$slides.get(slick.currentSlide));
            var currentImg = current.find('img[data-src-color]');
            var srcColor = currentImg.attr('data-src-color');
            var srcGrey = $(currentImg[0]).attr('src');
            $(slick.$slides).find('img').attr('src', srcGrey);
            $(slick.$slides).find('img').attr('data-src-color', srcColor);
            $(currentImg[0]).attr('src', srcColor);
            $(currentImg[0]).attr('data-src-color', srcGrey);
        });
    }

    
    
    

    // $('.js-case, .js-reviews, .js-reviews-nav').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    //     // console.log(nextSlide);
    //     AOS.refreshHard();
    // });

    AOS.init(); // init scroll animation only after sliders

});
