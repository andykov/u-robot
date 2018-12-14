// .advantage scripts goes here 

$(function() {
    function owlMobileTile() {
        var screenWidth = $(window).width();

        var owlMobile = $(".js-owl-tile");
        if (owlMobile.length) {
            if (screenWidth <= 767) {
                owlMobile.owlCarousel({
                    items :1,
                    autoplay: true,
                    loop: true
                });
                owlMobile.addClass('owl-carousel');
            } else {
                owlMobile.owlCarousel().trigger('destroy.owl.carousel');
                owlMobile.removeClass('owl-carousel');
            }
        }
    }
    owlMobileTile();
    $(window).resize(function() {
        owlMobileTile();
    });
});