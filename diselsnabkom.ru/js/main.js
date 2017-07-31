/**
 * Created by User on 04.07.2017.
 */
;(function ($) {
    $('.open-modal').on('click', function () {
        $('.callback-wrapper').show(500)
    });
    $('.close').on('click', function () {
        $('.callback-wrapper').hide(500)
    });
})(jQuery);
