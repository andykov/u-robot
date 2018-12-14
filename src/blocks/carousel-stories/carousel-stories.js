// .carousel-stories scripts goes here 

$(function() {

	$('.js-carousel-stories').owlCarousel({
	    loop: false,
	    margin: 20,
	    nav: true,
	    responsive:{
	        0: {
	            items: 1
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