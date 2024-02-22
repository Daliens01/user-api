
const queries = require("../queries/queries")
const excecutions = (db, req,res)=>{
    const licenciatura = ()=>{
        db.query(queries().licenciatura,(err, data)=>{
            if(err) return res.json("error")
            else return res.json(data)
        })
    }
    
    const posgrado = ()=>{
        db.query(queries().posgrado,(err, data)=>{
            if(err) return res.json("error")
            else return res.json(data)
        })
    }
    return{licenciatura, posgrado}
}

module.exports = excecutions