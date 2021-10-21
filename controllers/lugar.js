const Lugar = require('../models/lugar')

exports.postAgregarLugar = async (req,res)=>{
    const lugar = new Lugar(req,body)
    try{
        Lugar.find({nombre: lugar.nombre}, function(err, docs){
            if(!docs.length){
                await lugar.save()
                console.log(lugar)
                console.log("Lugar Registrado")
                res.send({operacion: 'correcta'})
            }else{
                let interes = lugar.interes
                await Lugar.findOneAndUpdate({nombre: lugar.nombre}, {interes: interes+1})
                console.log("Cambio Realizado")
                res.json({operacion: "Correcta"})
            }
        })   
    }catch(err){
        console.log(err)
    }
}

exports.getObtenerLugar = async (req,res)=>{
    const lug = await Lugar.findOne({nombre: req.body.nombre})
    console.log(lug)
    res.json(lug)
}