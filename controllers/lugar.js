const Lugar = require('../models/lugar')

exports.postAgregarLugar = async (req,res)=>{
    const lugar = new Lugar(req.body)
    try{
        if(Lugar.exists({nombre: lugar.nombre})){
            let interes = await lugar.interes
            await Lugar.findOneAndUpdate({nombre: lugar.nombre},{interes: interes+1})
            console.log("Interes incrementado")
            res.json({operacion: "Correcta"})
        }else{
            await lugar.save()
            console.log("Lugar Registrado")
            console.log(lugar)
            res.send({operacion: "correcta"})
        }
    }catch(err){
        console.log(err)
    }
}

exports.getObtenerLugar = async (req,res)=>{
    const lug = await Lugar.findOne({nombre: req.body.nombre})
    console.log(lug)
    res.json(lug)
}

exports.postActualizarLugar = async(req, res)=>{
    try{
        await Lugar.findOneAndUpdate(req.body.filtro,req.body.cambio)
        console.log("Cambio Realizado")
        res.json({operacion: "Correcta"})
    }
    catch(err){
        console.log(err)
    }
}

exports.postBorrarLugar = async(req, res)=>{
    await Lugar.findOneAndRemove(req.body.filtro)
    console.log("Lugar Eliminado")
    res.json({operacion: "Correcta"})
}