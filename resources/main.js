'use strict'

document.addEventListener("DOMContentLoaded", function(event) {
    const menuItems = document.getElementsByClassName("menu-item");
    const imgItems=document.getElementsByClassName("img-item");
    const orderDetails=document.getElementById("orderDetails");
    for (let i = 0; i < menuItems.length-1; i++) {
        const menuItem = menuItems[i];
        const imgItem=imgItems[i];
        orderDetails.classList.add("hidden");
        menuItem.addEventListener('click', function() {
            for(let j = 0; j < menuItems.length-1; j++) {
                if(menuItems[j].classList.contains('selected')){
                    menuItems[j].classList.remove("selected");
                } else {
                    continue;
                }
            }
            menuItem.classList.add("selected");
            imgItem.classList.add("selected");
            const dataContent = menuItem.dataset.content;
            const contentElements = document.getElementsByClassName("content");
            for(let k = 0; k < contentElements.length; k++) {
                if(contentElements[k].classList.contains('hidden')) {
                    continue;
                } else {
                    contentElements[k].classList.add("hidden");
                }
            }
            document.getElementsByClassName(dataContent)[0].classList.remove("hidden");
            if(imgItem.classList.contains("selected")){
                imgItem.classList.remove("hidden");
            }
        });
    }
    const seeOrderDetailsBtn=document.getElementById("seeOrderDetailsBtn");
    const yourOrders=document.getElementById("yourOrders");
    seeOrderDetailsBtn.addEventListener('click', function(){
        if(orderDetails.classList.contains("hidden")){
            orderDetails.classList.remove("hidden");
            yourOrders.classList.add("hidden");
        }
        
    });

    const myAccountForm=document.getElementsByName("myAccountForm")[0];
    myAccountForm.addEventListener('submit', function(e){
        e.preventDefault();
        //console.log("saved");
    });

    // incearca sa fii consistente la denumiri, ori toate sa inceapa cu litera mica ori toate cu litera mare
    const ProductOrderImage=document.getElementById("ProductOrderImage");
    const getImagesContainer=document.getElementById("imageContainer");
    // ai foarte multe imagini in proiect, iti recomand un alt selector aici
    const imagesItems=getImagesContainer.getElementsByTagName("img");
    for (let i = 0; i < imagesItems.length; i++) {
        const addImgItem = imagesItems[i];
        let counter=i+1;
        addImgItem.addEventListener('click', function() {
            console.log("click");
            ProductOrderImage.setAttribute('src', "assets/product-1/addition-"+counter+".png");
            addImgItem.setAttribute('src', "assets/product-1/product.png");

        });
    }


});