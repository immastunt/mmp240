function showMenu(){
    var  menu = document.getElementById("top-nav");
    if  (menu.style.display==="none" || menu.style.display === ''){
        menu.style.display="block";
        menu.style.transform="translateY(100px)"
    } else {
    menu.style.display="none";
        }
    }