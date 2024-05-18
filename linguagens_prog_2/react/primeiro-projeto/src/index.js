import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

// classes ou funções
const App = () => {
  const estilosdoBotao = {
    marginTop: 12,
    paddingTop: 8,
    paddingBottom: 8,
    backgroundColor: "blueviolet",
    color: "white",
    border: "none",
    width: "100%",
    borderRadius: 8,
  };

  const textoDoBotao = () => {
    return "Enviar";
  };

  const clicou = () => alert("Clicou!");

  return (
    <div
      style={{
        margin: "auto",
        width: 768,
        backgroundColor: "#EEE",
        padding: 12,
        borderRadius: 8,
      }}
    >
      <label
        className="rotulo"
        htmlFor="nome"
        style={{ display: "block", marginBottom: 4 }}
      >
        Nome:
      </label>
      <input
        type="text"
        id="nome"
        style={{
          paddingBottom: 8,
          borderStyle: "hidden",
          width: "100%",
          borderRadius: 8,
          outline: "none",
          boxSizing: "border-box",
        }}
      />
      <button style={estilosdoBotao} onClick={() => clicou()}>
        {textoDoBotao()}
      </button>
    </div>
  );
};

// renderizar
ReactDOM.render(
  <App />, // cara a ser montado
  document.querySelector("#root") // onde será montado, o documento é o proprio DOM
);
