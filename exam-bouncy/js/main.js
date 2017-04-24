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
        $('.team__slider').slick({
            arrows: false,
            autoplay: false,
            dots: true
        });
    });
//slider1
//slider2
    $(function () {
        $('.test__slider').slick({
            arrows: false,
            autoplay: true,
            speed: 1500,
            dots: true
        });
    });

//slider2
//filter
    function click(a) { //for control active of flag
        a.children('.flag').addClass('flag--active');
        a.siblings().children('.flag').removeClass('flag--active')
    }
    function workFilter() { //gray block up
        var a = $(this),
            b = a.data('name'); //get data attr (print, brand, web, html)
        click(a);
        a.parent('ul')
            .siblings('.works')
            .find('.works__filter')
            .addClass('works__filter--active');
        a.parent('ul') //del gray block for current category
            .siblings('.works')
            .children('.works__' + b) //dynamic change of class (.works__print)
            .find('.works__filter')
            .removeClass('works__filter--active');
    }

    function allWorks() {
        var a = $(this);
        click(a);
        a.parent('ul')
            .siblings('.works')
            .find('.works__filter')
            .removeClass('works__filter--active');
    }
    $('.filter__item1').on('click', allWorks);
    $('.filter__item2').on('click', workFilter);
    $('.filter__item3').on('click', workFilter);
    $('.filter__item4').on('click', workFilter);
    $('.filter__item5').on('click', workFilter);

//filter
//fly scroll
    $('.fly').click(function(){
//Сохраняем значение атрибута href в переменной:
        var target = $(this).attr('href');
        $('html, body').animate({scrollTop: $(target).offset().top}, 800);
        return false;
    });

//fly scroll
})(jQuery);

