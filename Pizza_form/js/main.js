;(function ($) {
    objectClick = $('.pizza__size a');
    objectSelect = $('#sort, #size, #quantity');
    objectClick.on('click', autoSelect);
    objectClick.on('click', addDescSort);
    objectClick.on('click', addDescSize);
    objectSelect.on('change', showForm);
    $('#sort').on('change', addDescSort);
    $('#size').on('change', addDescSize);
    $('#quantity').on('change', addDescQuan);
    objectSelect.on('change', calc);

    function addDescSort() {
        var indexSelectedElement = $("#sort option:selected").index() - 1;
        var descTxt = $('.menu__pizza').eq(indexSelectedElement).children('.pizza__composition').text();
        $('.description__sort').text(descTxt);
    }

    function addDescSize() {
        var descSize = [
            'Маленькая пицца рассчитаная на одного взрослого или двух детей',
            'Стандартная пицца рассчитаная на двух взрослых или четырех детей',
            'Большая пицца - если Вы пригласили друзей'
        ];
        var indexSizeElement = $('#size option:selected').index() - 1;
      $('.description__size').text(descSize[indexSizeElement]);
    }

    function addDescQuan(quantity) {
        if (quantity != "don't_select"){
        $('.description__quantity').text('Вы выбрали ' + quantity + ' единиц товара')}
        else {$('.description__quantity').text("")}
    }

    function showForm() {
        var sort = $('#sort option:selected').val(),
            size = $('#size option:selected').val(),
            quant = $('#quantity option:selected').val();
        // console.log(quant);
        if ((sort != "don't_select") && (size != "don't_select") && (quant != "don't_select")){
        $('.wrapper-client-data').addClass('active')}
    }

    function autoSelect() {
        var sizeIndex = $(this).index() + 1,
            nameIndex = $(this).closest('.menu__pizza').data('index');
        // console.log(sizeIndex);
        $('#sort').prop("selectedIndex", nameIndex);
        $('#size').prop("selectedIndex", sizeIndex);
    }
    function calc() {
        var selected = $("#sort option:selected");
        var price = selected.data('price');
        var quantity = $("#quantity option:selected").val();
        var size = Number($('#size option:selected').data('size'));
        addDescQuan(quantity);
        if ((selected.val() != "don't_select") &&
            (quantity != "don't_select") && (size != 0)
        ){
        var totalCost = Math.round(price * quantity * size);
        $('.order-cost').text(totalCost);}
        else {$('.order-cost').text("0")}
    }

    $('.fly').click(function(){
        var target = $(this).attr('href');
        $('html, body').animate({scrollTop: $(target).offset().top}, 800);
        return false;
    });

})(jQuery);

