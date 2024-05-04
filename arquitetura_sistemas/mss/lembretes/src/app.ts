import express from "express"

import axios from "axios"

const app = express()
app.use(express.json())

// {
//     "1" : {
//         "id": "1",
//         "texto": "Comprar café",
//     },
//     "2" : {
//         "id": "2",
//         "texto": "Natação",
//     }
// }

function avisarLembreteCriado(id: string){
    axios.post(`http://localhost:10000/eventos`,{
        tipo:"LembreteCriado",
        dados:{
            id
        }
    })
}


interface Lembrete{
    id:string;
    texto:string;
}

let id: string = "1";

const Lembretes: Record<string, Lembrete> = {

}

app.get('/lembretes',(req,res)=>{
    res.json(Lembretes)
})

app.post('/lembretes',(req,res)=>{
    const { texto } = req.body
    const lembrete: Lembrete = {
        id: id,
        texto: texto
    }
    Lembretes[id] = lembrete
    id = String(Number(id) + 1)
    res.json(Lembretes)
    avisarLembreteCriado(id)
})

app.delete('/lembretes/:id', (req,res) => {
    const {id} = req.params
    if (!Lembretes[id]) return res.status(404).json({erro: 'lembrete não encontrado'})
    delete Lembretes[id]
    res.status(204).send()
})

app.put('/lembretes/:id',(req,res)=>{
    const {id} = req.params
    const {texto} = req.body
    if (!Lembretes[id]) return res.status(404).json({erro: 'lembrete não encontrado'})
    Lembretes[id].texto = texto
    res.json(Lembretes[id])
})

app.post('/eventos', (req, res) => {
    console.log(req.body)
    res.status(200).send({msg: 'ok'})
    })


const PORT: number = 4001

app.listen(PORT, () => {
  console.log(`Lembretes: ${PORT}`)
})
