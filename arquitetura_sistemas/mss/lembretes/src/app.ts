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
    id= (+id + 1).toString()
    res.json(Lembretes)
})

const PORT: number = 4000

app.listen(PORT, () => {
  console.log(`Lembretes: ${PORT}`)
})
