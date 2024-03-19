

$(function(){

    $("#Insert").on("click",function(){
        
    
        let Type = $("#AddType").val()
        let Model = $("#AddNewModel").val()
        let Price = $("#AddPrice").val()
        let Distance = $("#AddDistance").val()
        let ImageUrl = $("#AddImageUrl").val()

        let myNewCarData = {Type:Type,Model:Model,Price:Price,Distance:Distance,ImageUrl:ImageUrl}

        axios.post("http://localhost:3000/api/Details/InsertNewCarData",myNewCarData)
            .then(response=>{

            alert(response.data.affectedRows+" Inserted")

        })
        .catch(err=>{
            console.log(err)
        })
    })
})