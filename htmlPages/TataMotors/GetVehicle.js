


$(function(){

    



        $("#GetCar").on("click",function(){


        let SearchType = $("#SearchType").val()
        let SearchModel = $("#SearchModel").val()
    
            let myCarData = {Type:SearchType,Model:SearchModel}
            axios.post("http://localhost:3000/GetCarDetails",myCarData)
            .then(response=>{

                alert(response.data)
                
                let NewHeading = response.data[0].Heading

                alert(response.data[0].imageUrl)
                alert(response.data[0].Price)


                $("#ModelName").replaceWith(SearchModel)
                $(".CarHeading").replaceWith("<div style = 'font-size:2rem; font-weight:bolder; '>"+SearchModel+"</div>")
                $(".ModelName").replaceWith(SearchModel)

                let NewImage = response.data[0].imageUrl
                
                $("#ShowModel").attr("src",NewImage)

                if(NewHeading == "Harrier"){
                    alert("Helo")
                    
                    $(".EVModel").css("height","580px")
                    



                }

                let NewPrice = response.data[0].Price
                $("#CarPrice").replaceWith(NewPrice)

                let NewDistance = response.data[0].Distance
                $(".Distance").replaceWith(NewDistance)

            })
            .catch(err=>{

                console.log(err)

            })
        

        
    })
})