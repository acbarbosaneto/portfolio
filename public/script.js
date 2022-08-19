
let menuItems = document.querySelector(".menuItems")
let menu = document.querySelector(".menu")
function activate(){
    if(menuItems.style.display==="flex"){
        menuItems.style.display="none";
    }else{
        menuItems.style.display="flex";
    }
}

menu.addEventListener("click",activate)