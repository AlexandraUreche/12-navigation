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
        $('.additional-menu').removeClass('hidden');
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

    const additionalImages=$('.more-products-order').find('img');
    additionalImages.click(function(){
       let imageOrder=$('.image-product').find('img');
       let imageOrderClone=imageOrder.attr('src');
       imageOrder.attr('src',$(this).attr('src'));
       $(this).attr('src', imageOrderClone);
        
    });
    $('form').on('submit', function(e) {
        e.preventDefault();
    });

    $("#ProductOrderImage").click(function(){
        $("#imgBig").attr("src",$(this).attr('src'));
        $("#overlay").show();
        $("#overlayContent").show();
    });
    
    $("#imgBig").click(function(){
        $("#imgBig").attr("src", "");
        $("#overlay").hide();
        $("#overlayContent").hide();
    });
});