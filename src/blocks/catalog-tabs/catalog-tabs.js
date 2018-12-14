$(function() {
    // удаление класса open, чтобы работал скролл на мобиле
    if ($(window).width() <= 767) {
        $('#catalog-tabs').removeClass('open');
    }

    if ($(window).width() < 992) {
        $('.catalog.catalog--map-open .catalog__list-head').css('top', $('.header-fixed').height())
    }
});