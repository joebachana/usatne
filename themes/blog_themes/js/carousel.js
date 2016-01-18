(function ($, window, Drupal, drupalSettings) {

  "use strict";
  $(document).ready(function() {
    if($('.carousel-responsive').length) {
        $('.carousel-responsive').slick({
            dots: false,
            infinite: true,
            speed: 1000,
            slidesToShow: 4,
            slidesToScroll: 4,
            responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            }, {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }, {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
        });
    }
  });


})(jQuery, this, Drupal, drupalSettings);





