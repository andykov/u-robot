// .car-booking scripts goes here

$(function() {

    if ($(window).width() >= 992) {
        $(".js-sticky-car-booking").stick_in_parent({
            offset_top: $('.header-fixed').height()
        });
    }

});