//google maps
; (function () {
    window.onload = function () {
        let map;
        let point = { lat: 48.436915830574556, lng: 35.069794207038306 };
        let iv1Content = document.querySelector('.info-window');

        function initMap() {
            map = new google.maps.Map(document.getElementById('map1'), {
                center: point,
                scrollwheel: false,
                zoom: 17,
                disableDefaultUI: true
            });

            let marker = new google.maps.Marker({
                position: point,
                map: map,
                icon: 'img/map-marker.png'
            });

            let infowindow = new google.maps.InfoWindow({
                content: iv1Content
            });
            marker.addListener('click', function () {
                infowindow.open(map, marker);
                iv1Content.style.opacity = 1;
            });
        }

        initMap();
    }
})();
//google maps

//slider1
; (function ($) {
    $(function () {
        $('.works__slider').slick({
            arrows: true,
            autoplay: false,
            dots: true,
            responsive: [
                {
                    breakpoint: 769,
                    settings: {
                        arrows: false
                    }
                }
            ]
        });
    });
    //slider1
    //slider2
    $(function () {
        $('.team__slider').slick({
            arrows: true,
            dots: false,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 3,
            responsive: [
                {
                    breakpoint: 1250,
                    settings: {
                        arrows: false,
                        dots: false,
                        infinite: true,
                        slidesToShow: 3,
                        slidesToScroll: 3
                    }
                },
                {
                    breakpoint: 1024,
                    settings: {
                        arrows: false,
                        dots: false,
                        infinite: true,
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 701,
                    settings: {
                        arrows: false,
                        dots: false,
                        infinite: true,
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    });
    //slider2

    //fly scroll
    $('.fly').click(function () {
        let target = $(this).attr('href');
        $('html, body').animate({ scrollTop: $(target).offset().top }, 800);
        return false;
    });

    //fly scroll
    //height of window
    function heightWatch() {
        let winHeight = $(window).height();
        if (winHeight < 400) {
            $('.contact').addClass('contact--none');
        }
        else {
            $('.contact').removeClass('contact--none');
        }
    }

    $(window).resize(heightWatch);
    //height of window
    //drop-down menu
    $('.navbar-toggle').on('click', function () {
        $('.collapse').slideToggle();
    });
    //drop-down menu
    //pop-up rules
    $('.btn-show-pop-up').on('click', function () {
        $('#pop-up').addClass('active');
    });
    $('#close').on('click', function () {
        $('#pop-up').removeClass('active')
    });

    //pop-up rules
})(jQuery);

