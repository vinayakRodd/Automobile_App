$(function(){

    $(window).on("load",function(){


        var slideIndex=0;
    
        showSlides();
    
        function showSlides(){
    
            var Slides = $(".mySlides");
    
            Slides.hide();
    
            slideIndex++;
    
            if(slideIndex >  Slides.length)
                slideIndex = 1;
    
            Slides.eq(slideIndex-1).fadeIn()
    
            setTimeout(showSlides,3000);
        }
    })

    

})