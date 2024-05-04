import { Console } from 'console'
import dotenv from 'dotenv'
import express from 'express'
import axios from 'axios'
const { v4: uuidv4 } = require("uuid")
dotenv.config()


const app = express()
app.use(express.json())

const {PORT} = process.env

function avisarObservacoesCriado(id: string){
    axios.post(`http://localhost:10000/eventos`,{
        tipo:"ObservacaoCriado",
        dados:{
            id
        }
    })
}

interface Observacao{
    id: string;
    texto: string;
}

const base: Record<string,Observacao[]>={
}

app.post("/lembretes/:id/observacoes", (req, res) => {
    const idObs = uuidv4()
    const {texto} = req.body
    const observacoes: Observacao[] = base[req.params.id] || []
    const observacao : Observacao = {id:idObs,texto}
    observacoes.push(observacao)
    base[req.params.id] = observacoes
    res.status(201).json(observacao)
    avisarObservacoesCriado(req.params.id)
})

app.get("/lembretes/:id/observacoes", (req, res) => {
  res.status(200).json(base[req.params.id] || [])
})

app.post('/eventos', (req, res) => {
  console.log(req.body)
  res.status(200).send({msg: 'ok'})
})


app.listen(PORT, () => {
  console.log(`Observações: ${PORT}`)
})