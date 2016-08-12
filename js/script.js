var headerHeight = $("nav").height();

$(function(){
    $(".nav-item").on("click",function(){
        var target, scrollTop;
        
        target = $(this).attr("href");

        if(target==="#"){
            scrollTop = 0;
        }else{
            scrollTop = $(target).offset().top;
            scrollTop -= ($("nav").height() + 10);
        }
        $('body, html').animate(
            {scrollTop: scrollTop},
            300,
            'swing'
        );
        return false;
    });
    
    $(".rotateno6 .anm6").hover(function(){
        $(".rotateno6").addClass("hovered");
    },function(){
        
        $(".rotateno6").removeClass("hovered");
    })
});