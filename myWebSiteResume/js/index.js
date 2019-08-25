$(document).ready(function(){
    $(".nav-icon").click(function(){
        $(".full-nav").addClass("open");
    });
    
    $(".nav-close").click(function(){
        $(".full-nav").removeClass("open");
    });
    
    $(window).scroll(function(){
        let sc = $(window).scrollTop();
        if(sc > 100){
            $(".nav").addClass("sticky");
        }
        else{
            $(".nav").removeClass("sticky");
        }
        
    });
    $('.bxslider').bxSlider({
    mode: 'horizontal',
    moveSlides:1,
    slideMargin: 10,
    infiniteLoop: true,
    minSlides: 1,
    speed: 1200
 });
    
    $("a.scrollto").click(function () {
//        $(".nav-close").click(function(){
        $(".full-nav").removeClass("open");
//        });
    var elementClick = '#' + $(this).attr("href").split("#")[1]
    var destination = $(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 800);
    return false;
});
    
});












































