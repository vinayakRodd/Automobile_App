const express = require('express')
const router = express.Router()
const connection = require('../DbConnect')

router.post("/InsertNewCarData",(req,resp)=>{

    let myNewCarData = req.body

    let data = []

    data.push(myNewCarData.Type)
    data.push(myNewCarData.Price)
    data.push(myNewCarData.Model)
    data.push(myNewCarData.Distance)
    data.push(myNewCarData.ImageUrl)

    console.log(myNewCarData)

    connection.query("insert into evcars (Type,Price,Model,Distance,ImageUrl) values (?,?,?,?,?) ",data,(err,response)=>{

        if(err)
        console.log(err)
    
        else
        resp.send(response)
    })
})

module.exports = router