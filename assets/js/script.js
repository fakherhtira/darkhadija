// open/ close Left Navigation in desktop version
var menu_box = document.getElementById('menu_box')
var mobile_nav_bar = document.getElementsByClassName('mobile_nav')[0]
var menu = "close";
menu_box.addEventListener('click', function(){
    if(menu === 'close'){
        mobile_nav_bar.style.transform = 'translate(0, 0)'
        menu = 'open' 
    }else{
        mobile_nav_bar.style.transform = 'translate(-100%, 0)'
        menu = 'close'
    }
})
var close_drawer = document.getElementById('close_drawer')
close_drawer.addEventListener('click', function(){
    mobile_nav_bar.style.transform = 'translate(-100%, 0)'
    menu = 'close'
})

