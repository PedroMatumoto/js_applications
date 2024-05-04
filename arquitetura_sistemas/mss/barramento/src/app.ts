import express from 'express'
import axios from 'axios'
import dotenv from 'dotenv'
dotenv.config()

const app = express()
app.use(express.json())

const {PORT} = process.env

app.post('/eventos',function(req,res){
    const evento = req.body
    axios.post('http://localhost:4001/eventos',evento)
    axios.post('http://localhost:5000/eventos',evento)
    res.end()  
})


app.listen(PORT,()=> console.log(`Barramento. Porta: ${PORT}.`))