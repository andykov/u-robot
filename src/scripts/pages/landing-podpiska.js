$(function() {

    // анимация по скролу на лендинге подписки
    skrollr.init({
        mobileCheck: function() {
            //hack - forces mobile version to be off
            return false;
        }
    });



    // if ($(window).width() >= 1200) {
    //     $('.js-fullpage-holder').fullpage({
    //         sectionSelector: '.subs-section',
    //         // fixedElements: '.header-fixed, .footer',
    //         // autoScrolling: false,
    //         // offsetSections: '-52px',
    //         afterLoad: function(anchorLink, index) {
    //             if (index == 2) {
    //                 $('.lp-subs-iphone').addClass('animate-start');
    //             } else {
    //                 $('.lp-subs-iphone').removeClass('animate-start');
    //             }
    //         }
    //     });
    // }





//     var currentLocation = 'firstPage';
// // No need to set these inside the event listener since they are always the same.
//     var firstHeight = $('#firstPage').offset().top,
//         secondHeight = $('#secondPage').offset().top,
//         thirdHeight = $('#thirdPage').offset().top;
//
// // Helper so we can check if the scroll is triggered by user or by animation.
//     var autoScrolling = false;
//
//     $(document).scroll(function(e){
//         var scrolled = $(window).scrollTop();
//
//         // Only check if the user scrolled
//         if (!autoScrolling) {
//             if (scrolled > 1 && currentLocation == 'firstPage') {
//                 scrollPage(secondHeight, 'secondPage');
//             } else if (scrolled > secondHeight + 1 && currentLocation == 'secondPage') {
//                 scrollPage(thirdHeight, 'thirdPage');
//             } else if (scrolled < thirdHeight - 1 && currentLocation == 'thirdPage') {
//                 scrollPage(secondHeight, 'secondPage');
//             } else if (scrolled < secondHeight - 1 && currentLocation == 'secondPage') {
//                 scrollPage(firstHeight, 'firstPage');
//             }
//         }
//
//         // Since they all have the same animation, you can avoid repetition
//         function scrollPage(nextHeight, page) {
//             currentLocation = page;
//
//             // At this point, the page will start scrolling by the animation
//             // So we switch this var so the listener does not trigger all the if/else
//             autoScrolling = true;
//             $('body,html').stop().animate({scrollTop:nextHeight}, 500, function () {
//                 // Once the animation is over, we can reset the helper.
//                 // Now it is back to detecting user scroll.
//                 autoScrolling = false;
//             });
//         }
//     });








    // animate-start

    $.fn.isViewportScroll = function() {
        var elTop = $(this).offset().top;
        var elHeight = $(this).outerHeight();
        var elBottom = elTop + elHeight;
        var elOffset = $(this).attr('data-scroll-offset');

        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();

        // если у элемента указан атрибут [data-scroll-offset],
        // то добавляем его значение к отступу сверху [elTop]
        if (typeof elOffset !== typeof undefined && elOffset !== NaN) {
            var elOffsetPercent = elTop + (elHeight * Number(elOffset));
            // return elBottom > viewportTop && elOffset < viewportBottom // без процентов

            // проверяет так же уход элемента выше экрана и удаляет класс
            // return elBottom > viewportTop && Math.floor(elOffsetPercent) < viewportBottom // с процентами

            // проверяет так же уход элемента выше экрана но класс не удаляет
            return Math.floor(elOffsetPercent) < viewportBottom // с процентами
        } else {
            return elBottom > viewportTop && elTop < viewportBottom;
        }
    };


    $(window).on('resize scroll', function() {
        $('.js-animate').each(function(i, elem) {
            var elAnimateId = $(this).attr('data-animate-id');

            if ($(this).isViewportScroll()) {
                $('[data-animate-id='+elAnimateId+']').addClass('animate-start');
            } else {
                $('[data-animate-id='+elAnimateId+']').removeClass('animate-start');
            }
        });
    });

    $('.js-lp-subs-btn').on('click', function () {
        var $parentContainer = $(this).closest('.lp-subs-tariffs-box');
        var $parentItem = $(this).closest('.lp-subs-tariffs-box__item');

        $parentItem.siblings().addClass('hide');
        $parentItem.addClass('active');
        var body = $("html, body");

        body.stop().animate({scrollTop: ($parentContainer.offset().top - ($('.header-fixed').height() - 2))}, 300, 'linear', function() {
            $parentContainer.addClass('active');
        });

        $(this).closest('.lp-subs-tariffs-box__item').css({
            'min-height': $(window).height() - $('.header-fixed').height()
        });

        $('body').addClass('scroll-off');
    });

    $('.lp-subs-popup__close').on('click', function () {

        var $parentContainer = $(this).closest('.lp-subs-tariffs-box__item');
        var $parentItem = $(this).closest('.lp-subs-tariffs-box__item');

        $parentItem.removeAttr('style');
        $parentContainer.removeClass('active');
        $parentItem.removeClass('active');
        $parentItem.siblings().removeClass('hide');
        $('body').removeClass('scroll-off');
        var body = $("html, body");
        body.stop().animate({scrollTop: ($parentContainer.offset().top - $('.header-fixed').height())}, 500, 'linear');
    });

    $('#subsTariff')
        .on("change.select2", function(e) {
            var selectVal = e.target.value;
            var parentPopup = 'form-request-subscribe';

            if (selectVal == "green") {
                $(this).closest('.' + parentPopup).removeClass(parentPopup + '--blue ' + parentPopup + '--black');
                $(this).closest('.' + parentPopup).addClass(parentPopup + '--green');
            } else if (selectVal == "blue") {
                $(this).closest('.' + parentPopup).removeClass(parentPopup + '--green ' + parentPopup + '--black');
                $(this).closest('.' + parentPopup).addClass(parentPopup + '--blue');
            } else if (selectVal == "black") {
                $(this).closest('.' + parentPopup).removeClass(parentPopup + '--green ' + parentPopup + '--blue');
                $(this).closest('.' + parentPopup).addClass(parentPopup + '--black');
            }
        })
        .on("select2:select", function(e) {
            var selectVal = e.params.data.id;
            var parentPopup = 'form-request-subscribe';

            if (selectVal == "green") {
                $(this).closest('.' + parentPopup).removeClass(parentPopup + '--blue ' + parentPopup + '--black');
                $(this).closest('.' + parentPopup).addClass(parentPopup + '--green');
            } else if (selectVal == "blue") {
                $(this).closest('.' + parentPopup).removeClass(parentPopup + '--green ' + parentPopup + '--black');
                $(this).closest('.' + parentPopup).addClass(parentPopup + '--blue');
            } else if (selectVal == "black") {
                $(this).closest('.' + parentPopup).removeClass(parentPopup + '--green ' + parentPopup + '--blue');
                $(this).closest('.' + parentPopup).addClass(parentPopup + '--black');
            }

        });


    $(document).on('change.select2','#subsTariff, #subsMonth', function () {

        var subsDays = $('#subsDays'),
            tariff = $('#subsTariff').val(),
            months = $('#subsMonth').val();

        console.log(tariff);
        console.log(typeof months);
        console.log('///');
        console.log(tariffsData[tariff]);
        console.log(tariffsData[tariff][months]);

        subsDays.find('option').remove();
        $.each(tariffsData[tariff][months], function (index, value) {
            var newOption = new Option(value, value, false, false);
            subsDays.append(newOption).trigger('change.select2');
        });

    });

    $('.form-request-subscribe__close').on('click', function () {
        $(this).closest('.form-request-subscribe').removeClass('show');
    });

    // открытие всплывающего окна с формой
    $('.js-subs-form-trigger').on('click',function () {
        var id = $(this).attr('href'),
            idTariff = $(this).attr('data-subs-tariff'),
            tariffMonth = $(this).attr('data-subs-month');
        $(id).addClass('show');
        // передача параметров в селект в зависимости от выбранного тарифа
        $('#subsTariff').val(idTariff).trigger("change.select2");
        $('#subsMonth').val(tariffMonth).trigger("change.select2");
    });


});