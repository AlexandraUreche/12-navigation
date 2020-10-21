'use strict'

document.addEventListener("DOMContentLoaded", function(event) {
    const menuItems = document.getElementsByClassName("menu-item");
    const imgItems=document.getElementsByClassName("img-item");
    const orderDetails=document.getElementById("orderDetails");
    const seeAdditionalMenu=document.getElementsByClassName("additional-menu")[0];
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
            if(document.getElementsByClassName(dataContent)[0].classList.contains("orders-container")) {
                seeAdditionalMenu.classList.add("hidden");
            } else {
                    seeAdditionalMenu.classList.remove("hidden");
                }
            
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
            seeAdditionalMenu.classList.remove("hidden");
        }
        
    });

    const myAccountForm=document.getElementsByName("myAccountForm")[0];
    myAccountForm.addEventListener('submit', function(e){
        e.preventDefault();
        //console.log("saved");
    });

    // incearca sa fii consistente la denumiri, ori toate sa inceapa cu litera mica ori toate cu litera mare
    let getProductOrderImage=document.getElementById("ProductOrderImage");
    let setProductImageCopy=getProductOrderImage.src;
    const getImagesContainer=document.getElementById("imageContainer");
    // ai foarte multe imagini in proiect, iti recomand un alt selector aici
    const imagesItems=getImagesContainer.getElementsByTagName("img");//aici am luat doar img-urile de pe nodul: imageContainer, nu pe toate
    for (let i = 0; i < imagesItems.length; i++) {
        const addImgItem = imagesItems[i];
        addImgItem.addEventListener('click', function() {
            getProductOrderImage.setAttribute('src', addImgItem.src);
            addImgItem.setAttribute('src', setProductImageCopy);
            setProductImageCopy= getProductOrderImage.src;
        });
       
    }


});