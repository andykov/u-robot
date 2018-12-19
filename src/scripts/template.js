AOS.init();

$(function() {

    // slider
    $('.js-case').slick({
        dots: true,
        nextArrow:$('.case .slide-next'),
        prevArrow:$('.case .slide-prev'),
    });

    $('.js-reviews').slick({
        nextArrow:$('.reviews .slide-next'),
        prevArrow:$('.reviews .slide-prev'),
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        asNavFor: '.js-reviews-nav',
    });

    $('.js-reviews-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.js-reviews',
        dots: false,
        arrows: false,
        focusOnSelect: true
    });
    
    
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

        // blurElement('.tariff__price span.show', 2);


        $({blurRadius: 0}).animate({blurRadius: 10}, {
            duration: 700,
            easing: 'swing', // or "linear"
                             // use jQuery UI or Easing plugin for more options
            step: function() {
                $('.tariff__price span.show').css({
                    "-webkit-filter": "blur("+this.blurRadius+"px)",
                    "filter": "blur("+this.blurRadius+"px)"
                });
            }
        });
        $({blurRadius: 10}).animate({blurRadius: 0}, {
            duration: 700,
            easing: 'swing', // or "linear"
                             // use jQuery UI or Easing plugin for more options
            step: function() {
                console.log(this.blurRadius);
                $('.tariff__price span').removeClass('show');
                $('.tariff__price span[data-period-'+ period + ']').addClass('show');
                $('.tariff__price span.show').css({
                    "-webkit-filter": "blur("+this.blurRadius+"px)",
                    "filter": "blur("+this.blurRadius+"px)"
                });
            }

        });



        // var allVideos = $("iframe[src^='//player.vimeo.com'], iframe[src^='//www.youtube.com'], object, embed"),
        // fluidEl = $("figure");
        // console.log(allVideos);
        // allVideos.each(function() {
    
        //   $(this)
        //     // jQuery .data does not work on object/embed elements
        //     .attr('data-aspectRatio', this.height / this.width)
        //     .removeAttr('height')
        //     .removeAttr('width');
    
        // });
    
        // $(window).resize(function() {
        //     console.Log('1111');
        //   var newWidth = fluidEl.width();
        //   allVideos.each(function() {
    
        //     var elel = $(this);
        //     elel
        //         .width(newWidth)
        //         .height(newWidth * elel.attr('data-aspectRatio'));
    
        //   });
    
        // }).resize();


        // $().attr('data-period-'+ period).animate({
        //     blurRadius: 5
        //   }, 2000, function() {
        //     // Анимация завершена.
        //     console.log('blur');
        //   });
        // function percent(number) {

        //     var percent = "30"; // Необходимый процент
        //     var number_percent = 4999 / 100 * percent;
            
        //     return Number(number_percent) + Number(4999);
            
        // }
        
        // var new_price = percent("1000"); // Новая цена
    });
});