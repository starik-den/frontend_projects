//google maps
;(function () {
    window.onload = function () {
        var map,
            point = {lat: 48.734294, lng: 37.579304},
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
    function click() {
        $(this).children('.flag').addClass('flag--active');
        $(this).siblings().children('.flag').removeClass('flag--active')
    }
    function workPrint() {
        var a = $(this);
        a.parent('ul')
               .siblings('.works')
               .children('.works__branding')
               .children('.works__filter')
               .addClass('works__filter--active');
        a.parent('ul')
               .siblings('.works')
               .children('.works__web')
               .children('.works__filter')
               .addClass('works__filter--active');
        a.parent('ul')
            .siblings('.works')
            .children('.works__html')
            .children('.works__filter')
            .addClass('works__filter--active');
        a.parent('ul')
            .siblings('.works')
            .children('.works__print')
            .children('.works__filter')
            .removeClass('works__filter--active')
    }

    function workBranding() {
        var a = $(this);
        a.parent('ul')
            .siblings('.works')
            .children('.works__branding')
            .children('.works__filter')
            .removeClass('works__filter--active');
        a.parent('ul')
            .siblings('.works')
            .children('.works__web')
            .children('.works__filter')
            .addClass('works__filter--active');
        a.parent('ul')
            .siblings('.works')
            .children('.works__html')
            .children('.works__filter')
            .addClass('works__filter--active');
        a.parent('ul')
            .siblings('.works')
            .children('.works__print')
            .children('.works__filter')
            .addClass('works__filter--active')
    }

    function workWeb() {
        var a = $(this);
        a.parent('ul')
            .siblings('.works')
            .children('.works__web')
            .children('.works__filter')
            .removeClass('works__filter--active');
        a.parent('ul')
            .siblings('.works')
            .children('.works__branding')
            .children('.works__filter')
            .addClass('works__filter--active');
        a.parent('ul')
            .siblings('.works')
            .children('.works__html')
            .children('.works__filter')
            .addClass('works__filter--active');
        a.parent('ul')
            .siblings('.works')
            .children('.works__print')
            .children('.works__filter')
            .addClass('works__filter--active')
    }

    function workHtml() {
        var a = $(this);
        a.parent('ul')
            .siblings('.works')
            .children('.works__html')
            .children('.works__filter')
            .removeClass('works__filter--active');
        a.parent('ul')
            .siblings('.works')
            .children('.works__branding')
            .children('.works__filter')
            .addClass('works__filter--active');
        a.parent('ul')
            .siblings('.works')
            .children('.works__web')
            .children('.works__filter')
            .addClass('works__filter--active');
        a.parent('ul')
            .siblings('.works')
            .children('.works__print')
            .children('.works__filter')
            .addClass('works__filter--active')
    }

    function allWorks() {
        var a = $(this);
        a.parent('ul')
            .siblings('.works')
            .children('.works__html')
            .children('.works__filter')
            .removeClass('works__filter--active');
        a.parent('ul')
            .siblings('.works')
            .children('.works__branding')
            .children('.works__filter')
            .removeClass('works__filter--active');
        a.parent('ul')
            .siblings('.works')
            .children('.works__web')
            .children('.works__filter')
            .removeClass('works__filter--active');
        a.parent('ul')
            .siblings('.works')
            .children('.works__print')
            .children('.works__filter')
            .removeClass('works__filter--active')
    }

    $('.filter__item1').on('click', allWorks)
        .on('click', click);
    $('.filter__item2').on('click', workPrint)
        .on('click', click);
    $('.filter__item3').on('click', workBranding)
        .on('click', click);
    $('.filter__item4').on('click', workWeb)
        .on('click', click);
    $('.filter__item5').on('click', workHtml)
        .on('click', click);
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

