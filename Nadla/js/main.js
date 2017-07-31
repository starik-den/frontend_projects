//slider1
;(function ($) {

    $(function () {
        $('.certificates__slider').slick({
            arrows: true,
            // autoplay: true,
            // speed: 1500,
            dots: false,
            slidesToShow: 4,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1025,
                    settings: {
                        slidesToShow: 3,
                        // slidesToScroll: 1
                        dots: false

                    }
                },
                {
                    breakpoint: 950,
                    settings: {
                        slidesToShow: 2,
                        // slidesToScroll: 1
                        dots: false

                    }
                },
                {
                    breakpoint: 700,
                    settings: {
                        slidesToShow: 1,
                        // slidesToScroll: 1
                        dots: false

                    }
                }
            ]

        });

        function newsChangePosition() {
            // console.log(widthWindow);
            if ($(".contacts-wrapper").width() <= 950) {
                // console.log("1");
                $(".news").insertAfter($('.catalog-wrapper'));
            }
            else {
                // console.log("2");
                $(".news").insertAfter($(".catalog__content"));
            }
            if ($(".contacts-wrapper").width() <= 623) {
                $(".search-form").insertBefore($(".contacts"));
                // console.log("2");
            }
            else {
                $(".search-form").insertBefore($(".basket"));
                // console.log("3");
            }
            if ($(".contacts-wrapper").width() <= 640) {

                $(".footer__logo").insertBefore($(".footer__contact"));
                $(".footer__copyright").insertAfter($(".footer__contact"));
                $(".social").insertBefore($(".header__menu-down"));
            }
            else {

                $(".footer__logo").insertAfter($(".footer__contact"));
                $(".footer__copyright").insertBefore($(".footer__contact"));
                $(".social").insertAfter($(".footer-wt"));
            }
        }

        $(document).ready(newsChangePosition);
        $(window).resize(newsChangePosition);
        // $(window).resize(catalogView);

        $(".mobile-menu").on('click', function () {
            $(this).siblings('.header__menu').slideToggle();
            $(this).siblings('.header__menu-down').slideToggle();
        });
        $(".catalog__title").on("click", function catalogView() {
            if ($(".contacts-wrapper").width() <= 950) {
                $(this).siblings(".catalog__list").slideToggle();
            }
            else {
                // $(".catalog__list").show();
            }
        });
        $(window).resize(showHeaderMenu);
        $(window).resize(showCatalog);

        function showHeaderMenu() {
            if ($(".contacts-wrapper").width() > 948) {
                $(".header__menu").show();
            }
            else {
                $(".header__menu").hide();
            }
        }

        function showCatalog() {
            if ($(".contacts-wrapper").width() > 950) {
                $(".catalog__list").show();
            }
        }

        /*content height responsive*/
        var heightAboutUs = $(".about-us").height(),
            heightNewProd = $(".production__new-product").height(),
            heightCatalog = $(".catalog-wrapper").height();

        function responsiveHeightProduction() {
            console.log(heightCatalog);
            console.log(heightNewProd);
            console.log(heightAboutUs);
            if (heightCatalog > (heightAboutUs + heightNewProd)) {
                $(".production").css("height", heightNewProd + (heightCatalog - (heightAboutUs + heightNewProd)) + "px")
            }
        }

        $(document).ready(responsiveHeightProduction);

        /*content height responsive*/

    });


})(jQuery);

