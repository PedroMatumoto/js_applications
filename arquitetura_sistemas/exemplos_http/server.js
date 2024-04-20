const express = require('express');
const app = express();
let id = 1
const alunos = []


//post/alunos




app.use(express.json())
app.use((req,res,next) => {
    console.log('req.headers:', req.headers)
    next()
})

app.put('/alunos/:id', (req,res) => {
    const {id} = req.params
    const {nome, fone, email} = req.body
    const aluno = alunos.find(aluno => aluno.id == id)
    if (!aluno) return res.status(404).json({erro: 'Aluno não encontrado'})
    aluno.nome = nome
    aluno.fone = fone
    aluno.email = email
    res.json(aluno)
    res.status(204).send()
})

app.delete('/alunos/:id', (req,res) => {
    const {id} = req.params
    const index = alunos.findIndex(aluno => aluno.id == id)
    if (index == -1) return res.status(404).json({erro: 'Aluno não encontrado'})
    alunos.splice(index,1)
    res.status(204).send()
})

app.get('/alunos', (req,res) => {
    res.json(alunos)
})

app.post('/alunos',function(req,res){

    const {nome, fone, email} = req.body
    const aluno = {
        id: id++,
        nome,
        fone,
        email
    }
    alunos.push(aluno)
    res.status(201).json(aluno)
})

// endpoin: método do protocolo HTTP, recurso, funcionalidade
// API: Coleção de endpoints

app.get('/hello-express', (req,res) => {
    console.log(req.body)
    console.log("Sim, funcionou!")
    res.send('Hello Express')
})

app.listen(3000, () => console.log('Começou'))