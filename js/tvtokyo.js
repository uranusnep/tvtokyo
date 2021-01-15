$(function(){
    
    $(".slider").slick({
        autoplay:false,
        autoplaySpeed:5000,
        dots:true,
        arrows:true,
        centerMode:true,
        //centerPadding:"18.5%",
        variableWidth:true,
    });
    
   // $(".channel-slider").slick({
        //autoplay:true,
//    });
    
    $(".service-slider").slick({
        slidesToShow: 6,
        slidesToScroll: 4,
        variableWidth: true,
        infinite:false,
    });
    
    
    
    
   $('.recommend-slider').slick({
        centerMode:true,
        centerPadding:"115px",
        variableWidth:true,
        slideToShow:6,
        slidesToScroll:4,
    });
      
        
    
});