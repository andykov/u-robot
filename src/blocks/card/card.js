$(function() {


    // прлистывание превью фото в карточке
    $(document).on({
        mouseenter: function () {
            var $this = $(this);
            var idx = $this.index();
            $this.addClass('active');
            $this.closest('.card__photo').find('.card__photo-hover').eq(idx).addClass('show');
        },
        mouseleave: function () {
            var $this = $(this);
            var idx = $this.index();
            $this.removeClass('active');
            $this.closest('.card__photo').find('.card__photo-hover:eq('+ idx +')').removeClass('show');
        }
    }, ".card__photo li");


    // element viewport detected
    $.fn.isInViewport = function() {
        // var cardActiveHeight = $('.card.test').height();
        // var previewHeight = $('.catalog__preview').height();
        //
        // var elementTop = ($(this).offset().top + (cardActiveHeight / 2) + (previewHeight / 2));
        // console.log('elementTop = ' + $(this).offset().top);
        // console.log('elementTop+ = ' + elementTop);
        // console.log('offsetPreview = ' + $('.catalog__preview').offset().top);


        // cardScroll = cardActive.offset().top;
        // // cardScroll2 = ((cardActive.offset().top + cardActive.height()) + (heightPreview / 2));
        // cardScroll2 = ((cardActive.offset().top) + ((heightPreview / 2) - cardActive.height()));
        // // console.log('card отступ с учетом preview = ' + cardScroll2);


        var headerHeight = $('.header-fixed').height();
        var element = $(this);
        var elementHeight = element.height();
        var elementTop = element.offset().top;
        var elementTopLine = (element.offset().top - headerHeight);
        var elementBottom = (elementTop + elementHeight);
        var elementBottomLine = (elementBottom - headerHeight);
        console.log('elementTop = ' + elementTop);
        console.log('elementTopLine = ' + elementTopLine);
        console.log('elementBottom = ' + elementBottom);
        console.log('elementBottomLine = ' + elementBottomLine);

        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();
        console.log('viewportTop = ' + viewportTop);
        console.log('viewportBottom = ' + viewportBottom);

        //     var stickTop = 0;
        //     var stickBottom = (viewportBottom - elementHeight);
        // console.log(stickBottom);



        // if (!((elementTop - headerHeight) > viewportTop)) {
        //     console.log('За пределами сверху');
        //     $('.catalog__preview').removeAttr('style').css({
        //         transform: 'translateY('+ stickTop +')'
        //     });
        // } else if (elementBottom > viewportBottom) {
        //     $('.catalog__preview').removeAttr('style').css({
        //         transform: 'translateY('+ (stickBottom - headerHeight) +'px)'
        //     });
        //     return false;
        // }
        // else {
        //     console.log('Внутри');
        // }

        // return ((elementTop - headerHeight) > viewportTop);
        // return  elementBottom > viewportBottom;

        return {
            top: elementTopLine < viewportTop,
            bottom: elementBottomLine > viewportBottom
        };
        // return elementBottomLine < viewportBottom && elementTopLine > viewportTop; // рабочий
        // return elementBottom > viewportTop && elementTop < viewportBottom;
    };
    // console.log($('.catalog__preview').height());

    // $('.car-list__holder').on('resize scroll', function() {
    //     if ($('.card').is('.card--preview-show')) {
    //         var cardActive = $('.card.card--preview-show'),
    //             heightPreview = $('.catalog__preview').height(),
    //             heightCard = cardActive.height(),
    //             previewPosition = ((cardActive.offset().top + (heightCard / 2)) - $('.header-fixed').height()) - (heightPreview / 2);
    //         $('.catalog__preview').css({
    //             transform: 'translateY('+previewPosition+'px)'
    //         });
    //
    //         $('.catalog__preview').each(function() {
    //             console.clear();
    //             var previewViewport = $(this).isInViewport();
    //
    //             console.log(previewViewport);
    //
    //             // $(this).removeClass('bottom top');
    //
    //             if (previewViewport.top === true) {
    //                 $(this).removeAttr('style');
    //                 $(this).removeClass('bottom');
    //                 $(this).addClass('top');
    //             }
    //             if (previewViewport.bottom === true) {
    //                 $(this).removeAttr('style');
    //                 $(this).removeClass('top');
    //                 $(this).addClass('bottom');
    //             }
    //             //
    //             // if (previewViewport.bottom === false && previewViewport.bottom === false) {
    //             //     $(this).removeClass('top bottom');
    //             // }
    //
    //         });
    //     }
    // });

});

