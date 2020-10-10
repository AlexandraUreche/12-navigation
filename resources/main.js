'use strict'
document.addEventListener("DOMContentLoaded", function(event) {
    const menuItems = document.getElementsByClassName("menu-item");
    const imgItems=document.getElementsByClassName("img-item");
    for (let i = 0; i < menuItems.length-1; i++) {
        const menuItem = menuItems[i];
        const imgItem=imgItems[i];
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
            console.log(contentElements);
            for(let k = 0; k < contentElements.length-1; k++) {
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