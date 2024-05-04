import React from 'react'
import ReactDOM from 'react-dom'

// classes ou funções
const App = () => {
    return <div>Olá, mundo!</div>
    }

// renderizar
ReactDOM.render(
    <App />, // cara a ser montado
    document.querySelector('#root') // onde será montado, o documento é o proprio DOM 
)
