
const mySql = require('mysql')

const connection = mySql.createConnection({

    host:"localhost",
    password:"",
    user:"root",
    database:"automobile"
})

connection.connect((err)=>{

    if(err)
    console.log(err)

    else
    console.log("Connected to MySql")
})

module.exports = connection