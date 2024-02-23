const express = require("express")
const cors =  require("cors")
const mysql = require("./src/DBConnection/index")
const exc = require("./src/DBConnection/excecutions")
const port = process.env.PORT || 4000;
const app = express()

// app.use(cors())
// app.use(express.json())
// app.get("/", (req, res) =>{
//     res.send("Wellcome to Api-Esi-List");
// })
// app.get("/lic", (req,res)=>{
//     exc(mysql().db, req, res).licenciatura()
// })
// app.get("/pos", (req,res)=>{
//     exc(mysql().db, req, res).posgrado()
// })
// app.listen(port, ()=> console.log("PORT YOU'RE USING IS:", port));