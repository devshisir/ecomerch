$(document).ready(function() {
    


// banar slider active 
$('.banar_slider_active').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    smartSpeed: 1000,
    navText:['<i class="far fa-angle-left"></i>','<i class="far fa-angle-right"></i>'],
    autoplay: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})


// home product slider 
$('.home_product_slider_active').owlCarousel({
    loop:true,
    margin:15,
    nav:true,
    smartSpeed: 1000,
    navText:['<i class="far fa-angle-left"></i>','<i class="far fa-angle-right"></i>'],
    autoplay: false,
    responsive:{
        0:{
            items:1,
            stagePadding: 30,
        },
        576:{
            items:2
        },
        768:{
            items:3,
        },
        992:{
            items:4
        },
        1200:{
            items:5,
        },
        1500:{
            items:6
        },
    }
})










    
});