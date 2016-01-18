/**
 * Created by Quy on 12/15/2015.
 */

jQuery(function () {

    fix_max_height();
    fix_gallery();

    function fix_max_height() {
        jQuery('.slider .slick-list .slick-slide .views-field-title .field-content').matchHeight();
    }

    function fix_gallery() {
        // preprocess for gallery
        jQuery('#gallery-slider li img').each(function (i, e) {
            var self = jQuery(this);
            var src = self.attr('src');
            //http://localhost:8080/personal_blog/sites/default/files/styles/gallery_105_75_/public/field/gallery/demo-16.jpg?itok=TgjclIDq
            src = src.split('/styles')[0] + src.split('/public')[1];
            self.attr('src', src);
            self.attr('width', '');
            self.attr('height', '');
        });

        // The slider being synced must be initialized first
        jQuery('#gallery-carousel').flexslider({
            animation: "slide",
            controlNav: false,
            animationLoop: false,
            slideshow: false,
            itemWidth: 210,
            itemMargin: 5,
            asNavFor: '#gallery-slider'
        });

        jQuery('#gallery-slider').flexslider({
            animation: "slide",
            controlNav: false,
            animationLoop: false,
            slideshow: false,
            sync: "#gallery-carousel"
        });
    }
});