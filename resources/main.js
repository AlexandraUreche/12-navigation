'use strict'

document.addEventListener("DOMContentLoaded", function(event) {
    const menuItems = document.getElementsByClassName("menu-item");
    const imgItems=document.getElementsByClassName("img-item");
    for (let i = 0; i < menuItems.length; i++) {
        const menuItem = menuItems[i];
        const imgItem=imgItems[i];
        menuItem.addEventListener('click', function() {
            for(let j = 0; j < menuItems.length; j++) {
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
});