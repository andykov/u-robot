// .curousel-solutions scripts goes here 

$(function() {

	$('.js-carousel-solutions').owlCarousel({
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
	        768: {
	            items: 2
	        },
	        992: {
	        	items: 3
	        }
	    }
	});

});