// .curousel-solutions scripts goes here

$(function() {
    // $('.js-carousel-cars').owlCarousel({
    //     lazyLoad: true,
    //     loop: false,
    //     margin: 20,
    //     nav: true,
    //     dots: false,
    //     autoplay: true,
    //     autoplayHoverPause: true,
    //     responsive:{
    //         0: {
    //             items: 1,
    //             nav: false,
    //             dots: true
    //         },
    //         576: {
    //             items: 2,
    //             nav: false,
    //             dots: true
    //         },
    //         768: {
    //             items: 3
    //         },
    //         992: {
    //             items: 4
    //         }
    //     }
    // });

    var presetIdLoad = $('.js-preset-select-button.active').data("preset"),
		carOwl = $('.js-carousel-cars'),
		carItemsClone = carOwl.children().clone();

    var carItemsFilter = carItemsClone.filter('.js-car-preset-' + presetIdLoad);

    if ($('#car-presets').length) {
        carOwl.html(carItemsFilter);
    }

    carsPreset();


    $(document).on('click', '.js-preset-select-button', function () {

    	var presetIdSelected = $(this).data("preset");
        var carItemsFilter = carItemsClone.filter('.js-car-preset-' + presetIdSelected);

        carOwl.html(carItemsFilter);

        carOwl.trigger('destroy.owl.carousel');
        carsPreset();

    });


    function carsPreset() {
        carOwl.owlCarousel({
            lazyLoad: true,
            loop: false,
            margin: 20,
            nav: true,
            dots: false,
            autoplay: true,
            autoplayHoverPause: true,
            responsive:{
                0: {
                    items: 1,
                    nav: false,
                    dots: true
                },
                576: {
                    items: 2,
                    nav: false,
                    dots: true
                },
                768: {
                    items: 3
                },
                992: {
                    items: 4
                }
            }
        });
    }

});