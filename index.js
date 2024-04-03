const express = require("express")
const cors =  require("cors")
const mysql = require("./src/DBConnection/index")
const exc = require("./src/DBConnection/excecutions")
const port = process.env.PORT || 4000;
const app = express()
const fecha = new Date()
const TodaysDate = `${fecha.getFullYear()}-${fecha.getMonth()+1 > 9?fecha.getMonth()+1:`0${fecha.getMonth()+1}`}-${fecha.getDate() > 9? fecha.getDate(): `0${fecha.getDate()}`}`;
app.use(cors())
app.get("/", (req, res) =>{
    res.send(`Wellcome to Api-Esi-List at time ${TodaysDate}`);
})
app.get("/licenciatura", (req,res)=>{
    exc(mysql().db, req, res).licenciatura()
})
app.get("/posgrado", (req,res)=>{
    exc(mysql().db, req, res).posgrado()
})
app.get("/hilos", (req,res)=>{
    exc(mysql().db, req, res).hilos()
})
app.listen(port, ()=> console.log("PORT YOU'RE USING IS:", port));