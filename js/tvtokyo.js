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
        slidesToShow: 5,
        slidesToScroll: 5,
        infinite:false,
    });
      
   $('.recommend-slider').slick({
        slidesToShow:4,
        slidesToScroll:4,
     //   infinite:true,
        centerMode:true,
        centerPadding:"115px",
    });
      
        
    
});