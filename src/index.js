const express = require("express")
const cors =  require("cors")
const mysql = require("./DBConnection/index")
const exc = require("./DBConnection/excecutions")
const port = process.env.PORT || 4000;
const app = express()

app.use(cors())
app.use(express.json())
app.get("/", (req, res) =>{
    res.send("Wellcome to Api-Esi-List");
})
app.get("/licenciatura", (req,res)=>{
    exc(mysql().db, req, res).licenciatura()
})
app.get("/adminlicenciatura", (req,res)=>{
    exc(mysql().db, req, res).licenciaturaAdmin()
})
app.get("/posgrado", (req,res)=>{
    exc(mysql().db, req, res).posgrado()
})
app.get("/adminposgrado", (req,res)=>{
    exc(mysql().db, req, res).posgradoAdmin()
})
app.get("/hilos", (req,res)=>{
    exc(mysql().db, req, res).hilos()
})
app.listen(port, ()=> console.log("PORT YOU'RE USING IS:", port));