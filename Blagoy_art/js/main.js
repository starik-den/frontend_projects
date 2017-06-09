
//slider1
;(function ($) {

    $(function () {
        $('.slider').slick({
            arrows: true,
            autoplay: true,
            speed: 1500,
            dots: true,
            responsive: [

                {
                    breakpoint: 321,
                    settings: {
                        // slidesToShow: 1,
                        // slidesToScroll: 1
                        dots: false

                    }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
            ]
        });
        $('.small-search').on('click', function () {
            $(this).closest('.small-header')
                    .siblings('.header__container')
                    .children('.search')
                    .toggleClass('visible');
            // console.log('123')
        });
        $('.small-call').on('click', function () {
            $(this).closest('.small-header')
                    .siblings('.header__container')
                    .children('.contact')
                    .toggleClass('visible');
        });
        $('.small-menu').on('click', function () {
            $(this).closest('.small-header')
                .siblings('.header__container')
                .find('.menu')
                .toggleClass('visible');
        });
        $('.menu__link--active').on('click', function () {
            var object = $(this);
            object.siblings('.dropdown-menu')
                .toggleClass('visible');
            object.siblings('.dropdown-menu')
                .find('.dropdown-menu-2')
                .removeClass('visible');
        });
        $('.dropdown-menu__item--parent-2').on('click', function () {
            var object = $(this);
            object.find('.dropdown-menu-2')
                .toggleClass('visible');
            object.siblings('.dropdown-menu__item--parent-2')
                .find('.dropdown-menu-2')
                .removeClass('visible');
        });

    });


})(jQuery);

