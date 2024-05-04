import { Console } from 'console'
import dotenv from 'dotenv'
import express from 'express'
const { v4: uuidv4 } = require("uuid")
dotenv.config()


const app = express()
app.use(express.json())

const {PORT} = process.env

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

})

app.get("/lembretes/:id/observacoes", (req, res) => {
  res.status(200).json(base[req.params.id] || [])
})


app.listen(PORT, () => {
  console.log(`Observações: ${PORT}`)
})