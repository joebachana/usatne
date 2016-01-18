"use strict";

(function ($, window, Drupal, drupalSettings) {

  Drupal.Personal = Drupal.Personal || {};  


  Drupal.behaviors.zircon = {
    attach: function (context, settings) {

      $('[data-toggle="offcanvas"]').click(function () {
        $('.row-offcanvas').toggleClass('active');
      });

      // Mobile menu
      if ($(window).width() <= 991) {
        $('.mobile-main-menu .region-main-menu').accordionMenu();
      }
      $(window).resize(function() {
        if ($(window).width() <= 991) {
          $('.mobile-main-menu .region-main-menu').accordionMenu();
        }
      });

      $('#menu-toggle').mobileMenu({
        targetWrapper: '#main-menu'
      });

      $('.btn-btt').smoothScroll({speed: 1000});

      if($("#search-block-form [name='keys']").val() === "") {
        $("#search-block-form input[name='keys']").val(Drupal.t("Keywords"));
      }

      $("#search-block-form input[name='keys']").focus(function() {
        if($(this).val() === Drupal.t("Keywords")) {
          $(this).val("");
        }
      }).blur(function() {
        if($(this).val() === "") {
          $(this).val(Drupal.t("Keywords"));
        }
      });

      $(window).scroll(function() {
        if($(window).scrollTop() > 200) {
            $('.btn-btt').show();
          }
          else {
            $('.btn-btt').hide();
          }
      }).resize(function(){
        if($(window).scrollTop() > 200) {
            $('.btn-btt').show();
          }
          else {
            $('.btn-btt').hide();
          }
      });

      Drupal.Personal.matchHeight();      
    }
  };

  Drupal.Personal.matchHeight = function(){
    console.log('hello');
    var maxHeight = 0;
    $('.gallery-list .view-row .views-col .views-field-title').each(function() {
      if ($(this).outerHeight() > maxHeight) {
        maxHeight = $(this).outerHeight();
      }
    });
    console.log(maxHeight);
    $('.gallery-list .view-row .views-col .views-field-title').css('height', maxHeight);
  };

})(jQuery, this, Drupal, drupalSettings);


