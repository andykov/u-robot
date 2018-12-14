// .car-gallery scripts goes here 

$(function() {

    if ($('.js-car-gallery-thumb').length) {
        var $galleryPhoto = $('.js-car-gallery-photo .car-gallery__photo-list');
        var $galleryThumb = $('.js-car-gallery-thumb');

        $galleryPhoto.slick({
            lazyLoad: 'ondemand',
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            fade: true,
            responsive: [{
                breakpoint: 768,
                settings: {
                    asNavFor: '.js-car-gallery-thumb'
                }
            }]
        });

        if ($(window).width() >= 768) {
            $galleryThumb.slick({
                lazyLoad: 'ondemand',
                slidesToShow: 3,
                slidesToScroll: 1,
                asNavFor: '.js-car-gallery-photo .car-gallery__photo-list',
                arrows: false,
                vertical: true,
                verticalSwiping: true,
                dots: false,
                infinite: false,
                draggable: false,
                centerMode: false,
                focusOnSelect: true
            });
        }
    }

    // // Pref add class active to 1st thumbnail via js
    // $carGalleryThumbChild.eq(0).addClass('activeeeee');
    // // When slider autoplay or drag is true
    // $carGalleryBig.on('changed.owl.carousel', function(event) {
    //     // $('.thumbnail').removeClass('active');
    //     // var sliders = 4;
    //     var currentItem = event.item.index;
    //     console.log(currentItem);
    //     // if(currentItem >= sliders) {
    //     //     currentItem = 0;
    //     // }
    //     // $('.thumbnail').eq(currentItem).addClass('active');
    // });
    // // When thumbnail is clicked
    // // $('.thumbnail a').click(function(event) {
    // //     event.preventDefault();
    // //     $('.thumbnail').removeClass('active');
    // //     var index = $('.thumbnail a').index(this);
    // //     $('.thumbnail').eq(index).addClass('active');
    // //     $('.owl-slider').trigger('to.owl.carousel', [index, 300, true]);
    // // });
});