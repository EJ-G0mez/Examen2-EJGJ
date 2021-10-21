const express = require('express')
const mongoose = require('mongoose')
//const pokemonRoutes = ("./routes/pokemon")
const app= express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
//app.use("/pokemon", pokemonRoutes)

mongoose.connect('mongodb://user12:root@54.198.161.35:27017/base12?authSource=admin')
    .then(()=>{
        app.listen(8083,()=>console.log("Servidor en linea"))
    })
    .catch(err=>console.log(err))