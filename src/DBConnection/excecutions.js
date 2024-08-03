
const queries = require("../queries/queries")
const excecutions = (db, req,res)=>{
    const licenciatura = ()=>{
        db.query(queries().licenciatura,(err, data)=>{
            if(err) return res.json("error")
            else return res.json(data)
        })
    }
    const licenciaturaAdmin = ()=>{
        db.query(queries().administrativosLicenciatura,(err, data)=>{
            if(err) return res.json(err)
            else return res.json(data)
        })
    }
    
    const posgrado = ()=>{
        db.query(queries().posgrado,(err, data)=>{
            if(err) return res.json("error")
            else return res.json(data)
        })
    }
    const posgradoAdmin = ()=>{
        db.query(queries().administrativosPosgrado,(err, data)=>{
            if(err) return res.json("error")
            else return res.json(data)
        })
    }

    const hilos = () =>{
        db.query(queries().threadsConnnected, (err, data) =>{
            if(err) return res.json("error")
            else return res.json(data)
        })
    }
    return{licenciatura, posgrado,hilos, licenciaturaAdmin, posgradoAdmin}
}

module.exports = excecutions