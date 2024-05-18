import React from "react";
import ReactDOM from "react-dom";

// classes ou funções
const App = () => {
  const estiloTitulo = {
    marginTop: 12,
    paddingTop: 8,
    paddingBottom: 8,
    backgroundColor: "#EEEEEE",
    color: "black",
    border: "solid 1px blue",
    width: "100%",
    borderRadius: 8,
    textAlign: "center",
    // negrito
    fontWeight: "bold",
  };

  //eeeeee
  //e4ddee
  return (
    <div style={estiloTitulo}>
      <label
        className="rotulo"
        htmlFor="nome"
        style={{ display: "block", marginBottom: 4 }}
      >
        Profissionais de saúde
      </label>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <img
          src="https://img.freepik.com/fotos-gratis/medico-sorridente-olhando-para-a-camera_1150-7935.jpg"
          alt="Médico"
          style={{ width: 200, height: 300, borderRadius: 10 }}
        />
        <img
          src="https://img.freepik.com/fotos-gratis/enfermeira-negra-em-seu-espaco-de-trabalho_52683-100571.jpg"
          alt="Enfermeira"
          style={{ width: 200, height: 300, borderRadius: 10 }}
        />
      </div>
    </div>
  );
};

// renderizar
ReactDOM.render(
  <App />, // cara a ser montado
  document.querySelector("#root") // onde será montado, o documento é o proprio DOM
);
