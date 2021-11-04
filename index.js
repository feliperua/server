const express=require("express")

const app=express()

const morgan=require("morgan")

app.use(morgan("dev"))

app.use(express.json())

app.listen(2000,()=>{
    console.log('servidor escuchando en puerto 2000')
})
app.get("/ramon",(req,res)=>{
    res.send("<h1>hola mundo</h1>")
})

app.get("/usuario",(req,res)=>{
    const url='http://www.google.com'
    res.send(`<p>Lista de ususario</p> <a href=${url}>Ir a google</a>`)
})

app.post("/usuario",(req,res)=>{
    console.log(req.body)
    console.log(req.body.name)
    res.send(`El usuario ${req.body.name} se a logueado satisfactoriamente`)
})

app.post("/login",(req,res)=>{
    const usuario='ramon'
    const contrasena= '1234'
    if (usuario===req.body.user && contrasena===req.body.pass){
        res.send(`Usuario ${req.body.user} a ingresado al sistema`)
    }else{
        res.send('Usuario no encontrado en el sistema')
    }
})

app.delete("/usuario/:id",(req,res)=>{
    console.log(req.params.id)
    res.send(`se a hecho un delete en ${req.params.id}`)
})