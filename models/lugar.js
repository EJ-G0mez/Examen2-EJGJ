const mongoose = require('mongoose')

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