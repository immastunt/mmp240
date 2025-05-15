function showMenu(){
    var  menu = document.getElementById("top-nav");
    if  (menu.style.top==="-200px" || menu.style.top === ''){
        menu.style.top="50px";
        
    } else {
    menu.style.top="-200px";
        }
    }