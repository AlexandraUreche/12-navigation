$(function () {
    const menuItems=$('.menu-wrapper').find('a');
    const pagesWrapper= $('div[class ^= "content"]');
    const imgLogos=$('img[class ^= "content"]');
    menuItems.click(function(e){
        if(!$(this).data('content')){
            e.preventDefault();
        }
        menuItems.removeClass('selected');
        pagesWrapper.addClass('hidden');
        imgLogos.addClass('hidden');
        $(this).addClass('selected');
        var pageClass=$(this).attr('data-content');
        $('.'+pageClass).removeClass('hidden');
        $('img[data-content='+pageClass+']').removeClass('hidden');
        if($('.'+pageClass).hasClass('orders-container')){
            $('.additional-menu').addClass('hidden');
        }
    });
    $('#seeOrderDetailsBtn').click(function(){
        $('.order-details-wrapper').removeClass('hidden');
        $('.orders-container').addClass('hidden');
    });

    $('form').on('submit', function(e) {
        e.preventDefault();
    });
});