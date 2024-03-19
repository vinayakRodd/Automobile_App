/*
background-color:white ;
    background-position: initial;
    background-repeat: no-repeat;
    background-size:cover;
*/

$(function(){

    $("#LoginBtn").on("click",function(){

    
        var User = $("#User").val()
        var Password = $("#Pwd").val()
        

        $.ajax({

            url:"http://localhost:3000/Login/"+User,
            type:"GET",
            dataType:"json",
            success:function(result){
            
            if(result.length > 0){          // Chances of committing mistakes by using for loop..don't do that //
                
                

                if(User == result[0].User && Password == result[0].Password){
                    alert("Welcome")
                    sessionStorage.setItem("User","true")
                    window.location = "../htmlPages/Home.html"
                }

                else
                    alert("Access Denied")
            }
            
            else
                alert("Incorrect User or Password")
                
            }
        })

    })
})