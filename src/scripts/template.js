$(function() {
    $('.js-nav-mobile').on('click', function(){
        $(this).toggleClass('is-active');
        $(this).parent().find('.nav').toggleClass('is-active');
        $('html, body').toggleClass('scroll-off');
    });

    // $('.js-load-video').joldLoadVideo();
    var player = new Plyr('#player');
    // player.source = {
    //     ratio: '128:25'
    // };

    if ($('.video-container').length) {
        var blockVideo = document.querySelector('.video-container a');

        blockVideo.addEventListener('click', function (event) {
            event.preventDefault();
            this.classList.add("hide");
            player.play();
            $('.plyr__controls').show();
        });
    }
    
    
    // price blur effect
    function blurElement(element, size) {
        var filterVal = 'blur(' + size + 'px)';
         $(element).css({
           'filter':filterVal,
           'webkitFilter':filterVal,
           'mozFilter':filterVal,
           'oFilter':filterVal,
           'msFilter':filterVal,
           'transition':'all 0.5s ease-out',
           '-webkit-transition':'all 0.5s ease-out',
           '-moz-transition':'all 0.5s ease-out',
           '-o-transition':'all 0.5s ease-out'
       });
    }
    
    // button change price tariffs
    $('.js-tariff-period').on('click', function(){

        var period = $(this).attr('data-period');
        $(this).siblings().removeClass('is-link');
        $(this).addClass('is-link');

        $({blurRadius: 0}).animate({blurRadius: 10}, {
            duration: 700,
            easing: 'swing',
            step: function() {
                $('.tariff__price:not(.tariff__price--free) span.show').css({
                    "-webkit-filter": "blur("+this.blurRadius+"px)",
                    "filter": "blur("+this.blurRadius+"px)"
                });
            }
        });
        $({blurRadius: 10}).animate({blurRadius: 0}, {
            duration: 700,
            easing: 'swing',
            step: function() {
                $('.tariff__price:not(.tariff__price--free) span').removeClass('show');
                $('.tariff__price:not(.tariff__price--free) span[data-period-'+ period + ']').addClass('show');
                $('.tariff__price:not(.tariff__price--free) span.show').css({
                    "-webkit-filter": "blur("+this.blurRadius+"px)",
                    "filter": "blur("+this.blurRadius+"px)"
                });
            }
        });
    });

    // sliders
    if ($('.js-case').length) {
        $('.js-case').slick({
            dots: true,
            nextArrow:$('.case .slide-next'),
            prevArrow:$('.case .slide-prev'),
        });
    }

    // news
    if ($('.js-slide-news').length) {
        $('.js-slide-news').slick({
            arrows: true,
            dots: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                {
                  breakpoint: 991,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true,
                    dots: true
                  }
                },
            ]
        });
    }

    if ($('.js-slide-mobile').length && $(window).width() <= 992) {
        $('.js-slide-mobile').slick({
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            // responsive: [
            //     {
            //       breakpoint: 992,
            //       settings: {
            //         slidesToShow: 1,
            //         slidesToScroll: 1,
            //         arrows: false,
            //         dots: true
            //       }
            //     },
            // ]
        });
    }

    if ($('.js-slide-tariff').length && $(window).width() <= 992) {
        $('.js-slide-tariff').slick({
            infinite: false,
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            variableWidth: true
            // responsive: [
            //     {
            //       breakpoint: 992,
            //       settings: {
            //         slidesToShow: 1,
            //         slidesToScroll: 1,
            //         arrows: false,
            //         dots: true
            //       }
            //     },
            // ]
        });
    }

    if ($('.js-reviews').length) {
        $('.js-reviews').slick({
            arrows: false,
            // nextArrow:$('.reviews .slide-next'),
            // prevArrow:$('.reviews .slide-prev'),
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            // asNavFor: '.js-reviews-nav',
        });
    }

    // if ($('.js-reviews-nav').length) {
    //     $('.js-reviews-nav').on('init', function(event, slick){
    //         var current = $(slick.$slides.get(slick.currentSlide));
    //         var currentImg = current.find('img[data-src-color]');
    //         var srcColor = currentImg.attr('data-src-color');
    //         var srcGrey = $(currentImg[0]).attr('src');
    //         $(currentImg[0]).attr('src', srcColor);
    //         $(currentImg[0]).attr('data-src-color', srcGrey);
    //     });
        
    //     $('.js-reviews-nav').slick({
    //         slidesToShow: 4,
    //         slidesToScroll: 1,
    //         asNavFor: '.js-reviews',
    //         dots: false,
    //         arrows: false,
    //         focusOnSelect: true
    //     });

    //     $('.js-reviews-nav').on('afterChange', function(event, slick, currentSlide){
    //         var current = $(slick.$slides.get(slick.currentSlide));
    //         var currentImg = current.find('img[data-src-color]');
    //         var srcColor = currentImg.attr('data-src-color');
    //         var srcGrey = $(currentImg[0]).attr('src');
    //         $(slick.$slides).find('img').attr('src', srcGrey);
    //         $(slick.$slides).find('img').attr('data-src-color', srcColor);
    //         $(currentImg[0]).attr('src', srcColor);
    //         $(currentImg[0]).attr('data-src-color', srcGrey);
    //     });
    // }

    // accordion faq
    $('.js-faq').on('click', function(e) {
        var $this = $(this);
        $this.parent().toggleClass('active');
        if ($this.next().is(':visible')) {
            $this.next().slideUp(250);
        } else {
            $this.next().slideDown(250);
        }
    });

    AOS.init(); // init scroll animation only after sliders








//     var SEPARATION = 40, AMOUNTX = 130, AMOUNTY = 35;

// var container, wrapper;
// var camera, scene, renderer;
// /*

// if (window.WebGLRenderingContext){
// 	renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
// 	}
// else {
// 	renderer = new THREE.CanvasRenderer();
// 	}
// */

// var particles, particle, count = 0;

// var windowHalfX = window.innerWidth / 2;
// var windowHalfY = window.innerHeight / 2;

// init();
// animate();

// function init() {

//     container = document.createElement( 'div' );
    
//     wrapper = document.querySelector('.canvas-wrap');
//     wrapper.appendChild( container );
    
// 	if(container) {
//     	container.className += container.className ? ' waves' : 'waves';
// 	}

// 	camera = new THREE.PerspectiveCamera( 120, window.innerWidth / window.innerHeight, 1, 10000 );
// 	camera.position.y = 150; //changes how far back you can see i.e the particles towards horizon
// 	camera.position.z = 300; //This is how close or far the particles are seen
	
// 	camera.rotation.x = 0.35;
	
// 	scene = new THREE.Scene();

// 	particles = new Array();

// 	var PI2 = Math.PI * 2;
// 	var material = new THREE.SpriteCanvasMaterial( {

// 		color: 0x939393, //changes color of particles
// 		program: function ( context ) {

// 			context.beginPath();
// 			context.arc( 0, 0, 0.8, 0, PI2, true );
// 			context.fill();

// 		}

// 	} );

// 	var i = 0;

// 	for ( var ix = 0; ix < AMOUNTX; ix ++ ) {

// 		for ( var iy = 0; iy < AMOUNTY; iy ++ ) {

// 			particle = particles[ i ++ ] = new THREE.Sprite( material );
// 			particle.position.x = ix * SEPARATION - ( ( AMOUNTX * SEPARATION ) / 2 );
// 			particle.position.z = iy * SEPARATION - ( ( AMOUNTY * SEPARATION ) - 10 );
// 			scene.add( particle );

// 		}

// 	}

// 	renderer = new THREE.CanvasRenderer();
// 	renderer.setSize( window.innerWidth, window.innerHeight );
// 	renderer.setClearColor( 0xffffff, 1);
// 	container.appendChild( renderer.domElement );

// 	window.addEventListener( 'resize', onWindowResize, false );

// }

// function onWindowResize() {

// 	windowHalfX = window.innerWidth / 2;
// 	windowHalfY = window.innerHeight / 2;

// 	camera.aspect = window.innerWidth / window.innerHeight;
// 	camera.updateProjectionMatrix();

// 	renderer.setSize( window.innerWidth, window.innerHeight );

// }

// function animate() {

// 	requestAnimationFrame( animate );

// 	render();

// }

// function render() {

// 	var i = 0;

// 	for ( var ix = 0; ix < AMOUNTX; ix ++ ) {

// 		for ( var iy = 0; iy < AMOUNTY; iy ++ ) {

// 			particle = particles[ i++ ];
// 			particle.position.y = ( Math.sin( ( ix + count ) * 0.5 ) * 20 ) + ( Math.sin( ( iy + count ) * 0.5 ) * 20 );
// 			particle.scale.x = particle.scale.y = ( Math.sin( ( ix + count ) * 0.3 ) + 2 ) * 4 + ( Math.sin( ( iy + count ) * 0.5 ) + 1 ) * 4;

// 		}

// 	}

// 	renderer.render( scene, camera );

// 	// This increases or decreases speed
// 	count += 0.2;

// }
    
});
