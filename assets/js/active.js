/*
***************************************************************
***************************************************************

Author         : GlosoftGroup Limites
Author URI     : https://www.glosoftgroup.com
File           : Active.js

***************************************************************
***************************************************************/

(function ($) {
    "use strict";
    var allFunctions = {
        $window: $(window),
        customFuctions: {
            init: function () {
                allFunctions.customFuctions.sectionScroll();
                allFunctions.customFuctions.stickyMenu();
                allFunctions.customFuctions.teamTab();

            },
            sliderAnimate: function () {
                if($.fn.owlCarousel){
                    var sliderItems = $('.slide-content-wrap');
                    sliderItems.owlCarousel({
                        items: 1, // Default is 3
                        loop: true,
                        autoplay: true,
                        nav: true,
                        navText: ['<i class="icofont icofont-long-arrow-left"></i>', '<i class="icofont icofont-long-arrow-right"></i>'],
                        mouseDrag: false,
                        touchDrag: false,
                        animateIn: 'fadeIn',
                        animateOut: 'fadeOut'
                    });

                }
            },
            stickyMenu: function () {
                $(".header-area").sticky({
                    topSpacing: 0,
                    className: 'sticky',
                    responsiveWidth: true,
                    zIndex: 999
                });
            },
            sectionScroll: function () {
                var scroll = $(".section-scroll"),
                    scrollTop = $(".scrollTop");

                scroll.on("click", function (e) {
                    var $anchor = $(this),
                        offsetTop = 45;
                    $('html, body').stop().animate({
                        scrollTop: $($anchor.attr('href')).offset().top - offsetTop + "px"
                    }, 1200, 'easeInOutExpo');
                    e.preventDefault();

                });
                $(window).on('scroll', function () {
                    var scrolltoTop = $(this).scrollTop();
                    if ( scrolltoTop > 300 ) {
                        $('.scrollTop').fadeIn('slow').addClass('scroll-active');
                    }else {
                        $('.scrollTop').fadeOut('slow').removeClass('scroll-active');
                    }
                });

                scrollTop.on('click', function(e){
                    $('html, body').animate({
                        scrollTop : 0
                    }, 1000, 'easeInOutExpo');
                    e.preventDefault();
                });


                var body = $('body');
                body.scrollspy({
                    target: '.navbar-collapse',
                    offset: 95
                });
                $(document).on('click', '.navbar-collapse.in', function (e) {
                    if ($(e.target).is('a') && $(e.target).attr('class') !== 'dropdown-toggle') {
                        $(this).collapse('hide');
                    }
                });


            },
            teamTab : function () {
                var teamTabClick = $("ul.tab-list li");
                teamTabClick.on('click', function(e) {
                    e.preventDefault();
                    $(this).siblings('.active').removeClass("active");
                    $(this).addClass("active");
                    var index = $(this).index();
                    $(".single-tab-list").removeClass("active");
                    $(".single-tab-list").eq(index).addClass("active");
                });
            },
            sitePreloader: function () {
                var preloader = $('.preloader-area');
                preloader.fadeOut(500, function(){
                    $('.preloader').delay(500).fadeOut();
                });
            }
        },
        pluginFunctions: {
            init: function () {
                allFunctions.pluginFunctions.parallax();
                allFunctions.pluginFunctions.videoPlayer();
                allFunctions.pluginFunctions.wowAnimation();
                allFunctions.pluginFunctions.googleMap();
            },
            parallax: function () {
                allFunctions.$window.stellar({
                    horizontalScrolling: false,
                    positionProperty: 'position',
                    responsive: true
                });
            },
            popup: function () {
                if ($.fn.magnificPopup) {
                    var popup = $(".popup");
                    popup.magnificPopup({
                        type: 'image',
                        removalDelay: 300,
                        mainClass: 'mfp-with-zoom',
                        gallery: {
                            enabled: true
                        },
                        zoom: {
                            enabled: true, // By default it's false, so don't forget to enable it

                            duration: 300, // duration of the effect, in milliseconds
                            easing: 'ease-in-out', // CSS transition easing function

                            // The "opener" function should return the element from which popup will be zoomed in
                            // and to which popup will be scaled down
                            // By defailt it looks for an image tag:
                            opener: function (openerElement) {
                                // openerElement is the element on which popup was initialized, in this case its <a> tag
                                // you don't need to add "opener" option if this code matches your needs, it's defailt one.
                                return openerElement.is('a') ? openerElement : openerElement.find('a');
                            }
                        }
                    });
                }
            },
            wowAnimation: function () {
                var wow = new WOW({
                    mobile: false
                });

                wow.init();
            },
            videoPlayer: function () {
                if($.fn.YTPlayer){
                    $(".player").YTPlayer();
                }
            },
			googleMap: function(){
				function map_init() {
					var lat = 23.7788955; // Put your latitude Number and
					var log = 90.3959633; // Put your longitude Number
					var mapOptions = {
						zoom: 14,
						center: new google.maps.LatLng(lat, log), // New York
						mapTypeId: google.maps.MapTypeId.ROADMAP,
						scrollwheel: false,
						styles: [{"featureType":"all","elementType":"all","stylers":[{"hue":"#AF0808"}]}]
					};
					var mapElement = document.getElementById('map');
					var map = new google.maps.Map(mapElement, mapOptions);

					// Let's also add a marker while we're at it
					new google.maps.Marker({
						position: new google.maps.LatLng(lat, log),
						map: map,
						icon: ''
					});
				}
				// When the window has finished loading create our google map below
				google.maps.event.addDomListener(window, 'load', map_init);
			}
        },
        sliderFunctions: {
            init: function () {
                allFunctions.sliderFunctions.screenshotSlider();
                allFunctions.sliderFunctions.testimonialSlider();
            },

            screenshotSlider: function () {
                $('.screenshot-wrap').slick({
                    autoplay: true,
                    autoplaySpeed: 1000,
                    slidesToShow: 5,
                    centerPadding: '150px',
                    centerMode: true,
                    prevArrow: '<i class="fa fa-angle-left"></i>',
                    nextArrow: '<i class="fa fa-angle-right"></i>',
                    responsive: [{

                      breakpoint: 768,
                      settings: {
                        slidesToShow: 3,
                        centerPadding: '80px'
                      }

                    },{

                      breakpoint: 410,
                      settings: {
                        slidesToShow: 1,
                        centerPadding: '50px'
                      }

                    }]
                });
            },
            testimonialSlider: function () {
                if($.fn.owlCarousel){
                    var testimonialSlide = $(".testimonial-wrap");
                    testimonialSlide.owlCarousel({
                        items: 2, // Default is 3
                        loop: true,
                        autoplay: true,
                        margin: 30,
                        autoplayTimeout: 3000, // Default is 5000
                        smartSpeed: 1000, // Default is 250
                        dots: false,
                        nav: true,
                        navText: [
							'<i class="fa fa-angle-left"></i>',
							'<i class="fa fa-angle-right"></i>'
							],
                        responsive: {
                            1200: {
                                items: 2
                            },
                            992: {
                                items: 2
                            },
                            768: {
                                items: 2
                            },
                            320: {
                                items: 1
                            },
                            480: {
                                items: 1
                            }
                        }
                    });
                }
            }
        },
        ajaxForms: {
            ajaxFormHandle: function (f) {
                f.on("submit", function (e) {
                    e.preventDefault();
                    var a = $(this),
                        b = a.find('msg-box');
                    $.ajax({
                        url: a.attr('action'),
                        type: 'POST',
                        data: a.serialize(),
                        success: function (data) {
                            setTimeout(function () {
                                $(".msg-box").append('<div class="alert alert-msg alert-dismissible" role="alert">' + data + '<button type="button" class="close" data-dismiss="alert" aria-label="Close"><i class="fa fa-times"></i></button></div>');
                                $(".form-control").val('');
                            }, 200 * f);
                        }
                    });
                });
            },
            contact: function () {
                $(".contact-area").each(function () {
                    allFunctions.ajaxForms.ajaxFormHandle($(this).find('form'));
                });
            }
        },
        themeSwitcher: {
            init: function () {
                allFunctions.themeSwitcher.demoToggle();
                allFunctions.themeSwitcher.colorToggle();
                allFunctions.themeSwitcher.colorChange();
            },
            demoToggle: function () {
                var contoler = $(".switcher-control");
                contoler.on('click', function(e){
                    e.preventDefault();
                    $(".switcher").toggleClass('switcher-active');
                });
            },
            colorToggle: function () {
                $("ul.colors").each(function () {
                    var color = $('ul.colors li a');
                    color.on("click", function (e) {
                        e.preventDefault();
                        $(this).parents('ul.colors').find('a').removeClass('active');
                        $(this).addClass('active');
                    });
                });
            },
            colorChange: function () {
                var a = $(".colorOne" ),
                    b = $(".colorTwo" ),
                    c = $(".colorThree" ),
                    d = $(".colorFour" ),
                    e = $(".colorFive" ),
                    f = $(".colorSix" ),
                    g = $(".colorSeven" ),
                    h = $(".colorEight" );

                a.on("click", function(e){
					e.preventDefault();
                    $("#demo-colors").attr("href", "assets/css/colors/color-one.css" );
                    $('.logo').find('a').html('<img src="assets/images/logo.png" alt="">');
                });

                b.on("click", function(e){
					e.preventDefault();
                    $("#demo-colors").attr("href", "assets/css/colors/color-two.css" );
                    $('.logo').find('a').html('<img src="assets/images/logo-two.png" alt="">');
                });
                c.on("click", function(e){
					e.preventDefault();
                    $("#demo-colors").attr("href", "assets/css/colors/color-three.css" );
                    $('.logo').find('a').html('<img src="assets/images/logo-three.png" alt="">');
                });
                d.on("click", function(e){
					e.preventDefault();
                    $("#demo-colors").attr("href", "assets/css/colors/color-four.css" );
                    $('.logo').find('a').html('<img src="assets/images/logo-four.png" alt="">');
                });
                e.on("click", function(e){
					e.preventDefault();
                    $("#demo-colors").attr("href", "assets/css/colors/color-five.css" );
                    $('.logo').find('a').html('<img src="assets/images/logo-five.png" alt="">');
                });
                f.on("click", function(e){
					e.preventDefault();
                    $("#demo-colors").attr("href", "assets/css/colors/color-six.css" );
                    $('.logo').find('a').html('<img src="assets/images/logo-six.png" alt="">');
                });
                g.on("click", function(e){
					e.preventDefault();
                    $("#demo-colors").attr("href", "assets/css/colors/color-seven.css" );
                    $('.logo').find('a').html('<img src="assets/images/logo-seven.png" alt="">');
                });
                h.on("click", function(e){
					e.preventDefault();
                    $("#demo-colors").attr("href", "assets/css/colors/color-eight.css" );
                    $('.logo').find('a').html('<img src="assets/images/logo-eight.png" alt="">');
                });
            }
        }

    }


    $(window).on('load', function () {
        allFunctions.customFuctions.sitePreloader();
        allFunctions.customFuctions.sliderAnimate();
    });

    $(document).ready(function () {
        allFunctions.customFuctions.init();
        allFunctions.sliderFunctions.init();
        allFunctions.pluginFunctions.init();
        allFunctions.ajaxForms.contact();
        allFunctions.themeSwitcher.init();

    });

})(jQuery);
