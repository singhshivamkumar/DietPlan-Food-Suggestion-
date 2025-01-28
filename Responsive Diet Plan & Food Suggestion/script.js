let navbar = document.querySelector('.header .navbar');
let menu = document.querySelector('#menu');

menu.oneclick = () =>{
    menu.classList.toggle('fa-time');
    navbar.classList.toggle('active');
};

window.onscroll = () =>{
    menu.classList.remove('fa-time');
    navbar.classList.remove('active');
}


$(document).ready(function(){

    $('.buttons').click(function(){
        
        $(this).addClass('active').siblings().removeClass('active');

        var filter = $(this).attr('data-filter')

        if(fiter == 'all'){
            $('.diet .box').show(400);
        }
        else{
            $('.diet .box').not('.'+ filter).hide(200);
            $('.dite .box').filter('.'+ filter).show(400);
        }
    });
});




var swiper = new Swiper('.review-swiper',{
    loop: true,
    grabCursor:true,
    spaceBetween:20,
    breakpoints:{
        0:{
            slidesPerView: 1,
        },
        640:{
            slidesPerView: 2,
        },
        768:{
            slidesPerView: 3,
        },
    }
});

