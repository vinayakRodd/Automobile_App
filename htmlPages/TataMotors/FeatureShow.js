
$(function(){

    
/*
    $("#Next").on("click",function(){

        let ImageUrl = $("#ShowModel").attr("src")

        let NewImageUrl = ImageUrl.substring(20,21)

        NewImageUrl++

        if(NewImageUrl == 6)
            NewImageUrl = 1

        
        ImageUrl = "./TataImages/TataCar"+NewImageUrl+".webp"

        $("#ShowModel").attr("src",ImageUrl)
        

    })
*/

    $(".Red").on("click",function(){

        let ChangeImageUrl = "./TataImages/TataCar2.webp"

        setTimeout(function(){
            $(this).css("opacity","0.5")
        },100)

        $("#ShowModel").attr("src",ChangeImageUrl)

    })

    $(".White").on("click",function(){

        let ChangeImageUrl = "./TataImages/TataCar1.webp"

        setTimeout(function(){
            $(this).css("opacity","0.5")
        },100)

        $("#ShowModel").attr("src",ChangeImageUrl)
        
    })

    $(".Blue").on("click",function(){

        let ChangeImageUrl = "./TataImages/TataCar4.webp"

        setTimeout(function(){
            $(this).css("opacity","0.5")
        },100)

        $("#ShowModel").attr("src",ChangeImageUrl)
        
    })

    $(".Black").on("click",function(){

        let ChangeImageUrl = "./TataImages/TataCar5.webp"

        setTimeout(function(){
            $(this).css("opacity","0.5")
        },100)

        $("#ShowModel").attr("src",ChangeImageUrl)
        
    })

    $(".Cream").on("click",function(){

        let ChangeImageUrl = "./TataImages/TataCar3.webp"

        setTimeout(function(){
            $(this).css("opacity","0.5")
        },100)

        $("#ShowModel").attr("src",ChangeImageUrl)
        
    })

    
})