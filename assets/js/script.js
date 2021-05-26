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

console.log('Hello Begin')
  var btn = document.getElementsByClassName('btn')
  if(btn !== undefined){
    for(var i = 0;i<btn.length;i++){
        btn[i].addEventListener('mouseenter', e => {
        e.target.style.border = 'none'
        setTimeout(function() {
        e.target.style.border = '1px solid #D18F4E';
        }, 1500);
    });
  }
  }
  
  var btn_white = document.getElementsByClassName('btn_white')
  if(btn_white !== undefined){
    for(var i = 0;i<btn_white.length;i++){
        btn_white[i].addEventListener('mouseenter', e => {
        e.target.style.border = 'none'
        setTimeout(function() {
        e.target.style.border = '1px solid white';
        }, 1500);
    });
  }
  }
  
  
  console.log('Hello End')