(function ($, window, Drupal, drupalSettings) {

  "use strict";
    jQuery(document).ready(function ($) {
        if($('#slideshow_container').length) {
            var _SlideshowTransitions = [
            { $Duration: 1500, $Opacity: 2 }
            ];

            var options = {
                $AutoPlay: true,
                $AutoPlaySteps: 1,
                $AutoPlayInterval: 3000,
                $PauseOnHover: 0,
                $ArrowKeyNavigation: true,
                $SlideDuration: 500,
                $MinDragOffsetToSlide: 20,
                //$SlideWidth: 1170,
                //$SlideHeight: 390,
                $SlideSpacing: 0,
                $DisplayPieces: 1,
                $ParkingPosition: 0,
                $UISearchMode: 1,
                $PlayOrientation: 1,
                $DragOrientation: 3,

                $SlideshowOptions: {
                    $Class: $JssorSlideshowRunner$,
                    $Transitions: _SlideshowTransitions,
                    $TransitionsOrder: 1,
                    $ShowLink: true
                },

                $BulletNavigatorOptions: {
                    $Class: $JssorBulletNavigator$,
                    $ChanceToShow: 2,
                    $AutoCenter: 1,
                    $Steps: 1,
                    $Lanes: 1,
                    $SpacingX: 10,
                    $SpacingY: 10,
                    $Orientation: 1
                },

                $ArrowNavigatorOptions: {
                    $Class: $JssorArrowNavigator$,
                    $ChanceToShow: 2,
                    $Steps: 1
                }
            };
            var jssor_slider1 = new $JssorSlider$("slideshow_container", options);

            ScaleSlider();

            if (!navigator.userAgent.match(/(iPhone|iPod|iPad|BlackBerry|IEMobile)/)) {
                $(window).bind('resize', ScaleSlider);
            }
        }
        function ScaleSlider() {
            var parentWidth = jssor_slider1.$Elmt.parentNode.clientWidth;
            if (parentWidth)
                jssor_slider1.$SetScaleWidth(Math.min(parentWidth, 1170));
            else
                window.setTimeout(ScaleSlider, 30);
        }

    });


})(jQuery, this, Drupal, drupalSettings);


