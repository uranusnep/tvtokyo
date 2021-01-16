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
        centerMode:true,
        centerPadding:"115px",
    });
    //@see https://qiita.com/Sotq_17/items/0811311d88e1823fe0a8
    $('.recommend-slider').slick("slickSetOption", "slidesToScroll", 4, true);
      
        
    
});