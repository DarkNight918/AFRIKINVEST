(function ($) {

    'use strict';

    /* ----------------------------------------------------------- */
    /*  Fixed Header
    /* ----------------------------------------------------------- */
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 70) {
            $('.navbar').addClass('header-dark');
        } else {
            $('.navbar').removeClass('header-dark');
        }
    });

    /* ----------------------------------------------------------- */
    /*  Google Map
    /* ----------------------------------------------------------- */
    // function initialize() {
    //     var mapOptions = {
    //       zoom: 15,
    //       scrollwheel: false,
    //       center: new google.maps.LatLng(40.7127837, -74.00594130000002)
    //     };
    //     var map = new google.maps.Map(document.getElementById('map'),
    //         mapOptions);
    //     var marker = new google.maps.Marker({
    //       position: map.getCenter(),
    //       icon: 'assets/img/map_pin.png',
    //       map: map
    //     });
    // }
    // google.maps.event.addDomListener(window, 'load', initialize);	

})(window.jQuery);

