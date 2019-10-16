$(function() {
    
    let header = $("#header");
    let main = $("#main").innerHeight();
    let scrollOffset = $(window).scrollTop();;
    
//    Fixed Header
    checkScroll(scrollOffset);
    $(window).on("scroll", function() {
        scrollOffset = $(this).scrollTop();
        checkScroll(scrollOffset);
    });
    
    function checkScroll(scrollOffset){
        if(scrollOffset >= main){
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }

    $("[data-scroll]").on("click", function(event){
        event.preventDefault();
        
        let $this = $(this)
        let blockId = $this.data('scroll');
        let blockOffset = $(blockId).offset().top;
        
        $("#nav a").removeClass("active");
        $this.addClass("active");
        
        $("html, body").animate({
            scrollTop: blockOffset
        }, 500);
    });

});