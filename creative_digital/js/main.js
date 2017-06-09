//google maps
;(function () {
    window.onload = function () {
        var map,
            point = {lat: 47.138176, lng: 37.560537},
            iv1Content = document.querySelector('.info-window');

        function initMap() {
            map = new google.maps.Map(document.getElementById('map'), {
                center: point,
                zoom: 17,
                disableDefaultUI: true
            });

            var marker = new google.maps.Marker({
                position: point,
                map: map,
                icon: 'img/favicon.png'
            });

            var infowindow = new google.maps.InfoWindow({
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
;(function ($) {
    $(function () {
        $('.works__slider').slick({
            arrows: true,
            autoplay: false,
            dots: true,
            responsive: [

                {
                    breakpoint: 769,
                    settings: {
                        // slidesToShow: 1,
                        // slidesToScroll: 1
                        arrows: false
                    }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
            ]
        });
    });
//slider1
//slider2
    $(function () {
        $('.team__slider').slick({
            arrows: true,
            // autoplay: true,
            // speed: 1500,
            dots: false,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 3,
            // adaptiveHeight: true,
            responsive: [
                {
                  breakpoint: 1024,
                    settings: {
                        arrows: false,
                        dots: false,
                        infinite: true,
                        slidesToShow: 3,
                        slidesToScroll: 3
                    }
                },
                {
                    breakpoint: 770,
                    settings: {
                        arrows: false,
                        dots: false,
                        infinite: true,
                        slidesToShow: 2,
                        slidesToScroll: 2
                        // adaptiveHeight: true

                    }
                },
                {
                    breakpoint: 430,
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
    $('.fly').click(function(){
//Сохраняем значение атрибута href в переменной:
        var target = $(this).attr('href');
        $('html, body').animate({scrollTop: $(target).offset().top}, 800);
        return false;
    });

//fly scroll
//height of window
    function heightWatch () {
        var winHeight = $(window).height();
        console.log(winHeight);
        if (winHeight < 400){
            $('.contact').addClass('contact--none');
            // console.log("add class")
        }
        else {
            $('.contact').removeClass('contact--none');
            // console.log("not add class")
        }
    }
    $(window).resize(heightWatch);
//height of window
})(jQuery);

