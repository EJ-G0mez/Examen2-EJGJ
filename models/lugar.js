const mongoose = require('mongoose')

//Como una ciudad ES un lugar, nose me hace mucho sentido el porque deberían ser dos esquemas.

const LugarSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    nombre:{
        type: String,
        required: true
    },
    pais:{
        type: String,
        required: true
    },
    descripcion:{
        type: String,
        required: false
    },
    interes:Number
},{collection: 'lugar'})

module.exports = mongoose.model('Lugar', LugarSchema)