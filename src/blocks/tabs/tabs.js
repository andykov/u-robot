// .tabs scripts goes here 

$(function() {
    // $('.js-tabs .tabs-nav__link').on('click', function(){
    //     var tab_id = $(this).attr('data-tab');
    //     console.log(tab_id);
    //
    //     $('.tabs-nav__link').removeClass('active');
    //     $('.tabs-body__item').removeClass('active');
    //
    //     $(this).addClass('active');
    //     $("#"+tab_id).addClass('active');
    // });
    
    function tabShowHeight() {
        var tabsHeight = $('.js-tabs');

        if ($(window).width() >= 768) {
            var tabShowHeight = $('.tabs__item.show .tabs__cont').outerHeight();

            if (tabShowHeight > tabsHeight) {
                $('.js-tabs').css('height', tabShowHeight);
            }
        }
    }

    tabShowHeight();

    $('.js-tabs .tabs__btn').on('click', function(e){
        e.preventDefault();

        var tabs = $('.js-tabs'),
            tabBtn = $(this),
            tabCont = tabBtn.next(),
            tabItem = tabBtn.parent();



        // $(window).scrollTop(tabBtn.offset().top);
        // $("html, body").animate({ scrollTop: tabBtn.offset().top }, 1000);
        // console.log(tabBtn.offset().top);
        tabShowHeight();

        if ($(window).width() >= 768) {
            $('.tabs__item').removeClass('show');
        } else {

        }

        // $(this).addClass('active');
        tabItem.toggleClass('show');
    });

    $(window).resize(function() {
        tabShowHeight();
    });
});