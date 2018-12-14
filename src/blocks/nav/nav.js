// .nav scripts goes here

$(function() {

    function navMobileMove() {
        var w = $(window).width();

        if (w <= 1024) {
            $('.nav-main').prependTo( $(".nav-mobile") );
        } else {
            $('.nav-main').appendTo( $(".nav") );
        }
        if (w <= 767) {
            $('.nav-second').prependTo( $(".nav-mobile") );
            $('.js-region-notification').prependTo( $("body") );
        } else {
            $('.nav-second').appendTo( $(".nav") );
            $('.js-region-notification').appendTo( $(".nav-second__item--location") );
        }
    }

    navMobileMove();
    $(window).resize(function(){
        navMobileMove();
    });

    $('.js-mobile-trigger').on('click', function () {
        console.log($(this));
        $(this).toggleClass('active');
        $('.nav-mobile').toggleClass('open').css('top', $('.header-fixed').height());
        $('body').toggleClass('scroll-off');
    });

    // $(document).mouseup(function (e){
    //     var navMobile = $(".nav-mobile");
    //     if (!navMobile.is(e.target) && navMobile.has(e.target).length === 0) {
    //         navMobile.removeClass('open');
    //         $('.js-mobile-trigger').removeClass('active').removeAttr('style');
    //         $('body').removeClass('scroll-off');
    //     }
    // });

    // $('.nav-main__item > a, .nav-second__item > a').on('click', function (e) {
    //     if ($('.js-nav-dropdown-trigger').is(':visible')) {
    //         return false;
    //     }
    // });

    if ($(window).width() <= 1024) {
        $('.js-nav-dropdown-trigger').on('click', function() {
            $(this).toggleClass('active');
            $(this).parent().find('.nav-dropdown').toggleClass('show');
        });
    }

});