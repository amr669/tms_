jQuery(document).ready(function($) {

  // Header fixed and Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
      $('#header').addClass('header-fixed');
    } else {
      $('.back-to-top').fadeOut('slow');
      $('#header').removeClass('header-fixed');
    }
  });

  if ($(this).scrollTop() > 100) {
    $('.back-to-top').fadeIn('slow');
    $('#header').addClass('header-fixed');
  }

  $('.back-to-top').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
  });
  // Gallery - uses the magnific popup jQuery plugin
  $('.gallery-popup').magnificPopup({
    type: 'image',
    removalDelay: 300,
    mainClass: 'mfp-fade',
    gallery: {
      enabled: true
    },
    zoom: {
      enabled: true,
      duration: 300,
      easing: 'ease-in-out',
      opener: function(openerElement) {
        return openerElement.is('img') ? openerElement : openerElement.find('img');
      }
    }
  });

  // Initiate the wowjs animation library
  new WOW().init();

  // custom code
  
            /*
             * jQuery throttle / debounce - v1.1 - 3/7/2010
             * http://benalman.com/projects/jquery-throttle-debounce-plugin/
             * 
             * Copyright (c) 2010 "Cowboy" Ben Alman
             * Dual licensed under the MIT and GPL licenses.
             * http://benalman.com/about/license/
             */
   

            // Default carousel
            //var carousel = $('div.carousel-default').floatingCarousel({ autoScroll : true, touchOverflowHidden : false });
   $('.owl-carousel').owlCarousel({
    rtl:true,
    loop:false,
    margin:5,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:5
        }
    }
})
    //-----------------
}); 