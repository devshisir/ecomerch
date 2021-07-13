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


//shop_category_slider_active
$('.shop_category_slider_active').owlCarousel({
    loop:true,
    margin:15,
    nav:false,
    smartSpeed: 1000,
    autoplay: false,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    responsive:{
        0:{
            items:4,
            stagePadding: 20,
            mouseDrag: true,
            touchDrag: true,
            pullDrag: true,
            margin: 10,
        },
        576:{
            items:3,
            stagePadding: 100,
            mouseDrag: true,
            touchDrag: true,
            pullDrag: true,
        },
        768:{
            items:4,
            stagePadding: 100,
            mouseDrag: true,
            touchDrag: true,
            pullDrag: true,
        },
        992:{
            items:6,
            stagePadding: 100,
            mouseDrag: true,
            touchDrag: true,
            pullDrag: true,
        },
        1200:{
            items:8,
        },
        1500:{
            items:8
        },
    }
})


$('select').niceSelect();

$('.mobile_search_content input').focusin(function(){
    $('.mobile_search_suggestion').addClass('show');
})

$('.mobile_search_content input').focusout(function(){
    $('.mobile_search_suggestion').removeClass('show');
})

$('.mobile_search_btn').on('click',function(e){
    $('.mobile_search_wrapper').addClass('show');
    $('.mobile_search_content input').focus();
    e.preventDefault();
})

$('.close_mobile_search').on('click',function(){
    $('.mobile_search_wrapper').removeClass('show');
    $('.mobile_search_content input').focusout();
})


$('.gender_select li').on('click',function(){
    $('.gender_select li').removeClass('active');
    $(this).toggleClass('active');
})

$('.category_content_mobile li').on('click',function(){
    $('.category_content_mobile li').removeClass('active');
    $(this).toggleClass('active');
})

$('.size_content_mobile li').on('click',function(){
    $('.size_content_mobile li').removeClass('active');
    $(this).toggleClass('active');
})

$('.brand_content_mobile li').on('click',function(){
    $('.brand_content_mobile li').removeClass('active');
    $(this).toggleClass('active');
})

$('.color_content_mobile li').on('click',function(){
    $('.color_content_mobile li').removeClass('active');
    $(this).toggleClass('active');
})

$('.discount_content_mobile li').on('click',function(){
    $('.discount_content_mobile li').removeClass('active');
    $(this).toggleClass('active');
})

$('.country_content_mobile li').on('click',function(){
    $('.country_content_mobile li').removeClass('active');
    $(this).toggleClass('active');
})


    
});