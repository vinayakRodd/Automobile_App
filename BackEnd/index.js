
const express = require('express')
const bp = require('body-parser')
const cors = require('cors')
const connection = require('./DbConnect')
const AllCarData = require('./Routes/InsertCarData')


const PORT = 3000

const App = new express()

App.use(bp.json())

App.use(cors({"origin":"*"}))

App.use(bp.urlencoded({extended:false}))

App.use("/api/Details",AllCarData)

App.get("/Login/:User",(req,resp)=>{

    let User = req.params.User
    let data = []

    data.push(User)

    

    connection.query("select User,Password from details where User =? ",data,(err,response)=>{

        
        if(err)
        console.log(err)

        else
        resp.send(response)
    })

})

App.post("/GetCarDetails",(req,resp)=>{

    let myCarData = req.body

    console.log(myCarData.Type) // Type of Vehicle
    console.log(myCarData.Model)
    let data = []

    data.push(myCarData.Type)
    data.push(myCarData.Model)

        connection.query("select * from evcars where Type = ? and Model = ? ",data,(err,response)=>{

            if(err)
            console.log(err)

            else
            resp.send(response)

            
        })
})


App.listen(PORT,(err)=>{

    if(err)
    console.log(err)

    else
    console.log("Server Running at PORT "+PORT)
})
