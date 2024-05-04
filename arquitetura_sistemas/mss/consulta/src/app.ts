import express from 'express'
import axios from 'axios'
import dotenv from 'dotenv'
dotenv.config()

const app = express()
app.use(express.json())

// CRIAR EVENTOS
interface Evento{
    tipo:string;
    dados:any;
}

const Eventos: Evento[] = []

const {PORT} = process.env

app.post('/eventos', (req, res) => {
    const evento = req.body
    Eventos.push(evento)
    res.status(200).send({msg: 'ok'})
})


app.get('/consultas',function(req,res){
    res.json(Eventos)
})


app.listen(PORT,()=> console.log(`Porta: ${PORT}.`))