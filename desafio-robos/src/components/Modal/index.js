import CampoTexto from "../CampoTexto";
import Select from "../Select";
import "./Modal.css";
import { useState } from "react";

const Modal = () => {
  const onClose = () => {};

  const [nome, setNome] = useState("");
  const [capital, setCapital] = useState("");
  const [estrategia, setEstrategia] = useState("");

  const aoSalvar = (evento) => {
    console.log("Form foi submetido! =>", nome, capital, estrategia);
    evento.preventDefault()
  };

  return (
    <section className="modal">
      <div className="container">
        <div className="modal_header">
          <h2>Adicionar novo Robô</h2>

          <img 
          onClick={onClose}   
          src="/assets/X.png" alt="Fechar modal"></img>
        </div>
        <form>
          <h1>Vamos criar seu robô</h1>
          <p>Preencha as informações abaixo:</p>
          <div className="campo_texto">
            <CampoTexto
              obrigatorio={false}
              label="Nome do produto"
              placeholder="Nome do produto"
              valor={nome}
              aoAlterado={(valor) => setNome(valor)}
            />
            <CampoTexto
              obrigatorio={false}
              label="Capital inicial do robô"
              placeholder="R$"
              valor={capital}
              aoAlterado={(valor) => setCapital(valor)}
            />
          </div>
          <Select 
          obrigatorio={false}
          label="Selecione uma das estratégias abaixo"
          valor={estrategia}
          aoAlterado={valor => setEstrategia(valor)}
          />
          <div className="modal_botao">
            <button onClick={onClose}>Cancelar</button>
            <button onClick={aoSalvar}>Criar robô</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Modal;
