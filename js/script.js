$(document).ready(function () {


let pageHeight = $('body').height();
let header = $('.header');



let btn = $('.arrow-top');
$(window).scroll(function () {
    if ($(this).scrollTop() > 300){
        btn.fadeIn();
    }else{
        btn.fadeOut();
    };        
});

});