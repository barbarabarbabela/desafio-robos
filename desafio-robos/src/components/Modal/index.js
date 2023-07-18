import CampoTexto from "../CampoTexto";
import "./Modal.css";
import { useState } from "react";

const Modal = ({ onClose = () => {} }) => {
  const [nome, setNome] = useState("");
  const [capital, setCapital] = useState("");

  const aoSalvar = (evento) => {
    console.log("Form foi submitido! =>", nome, capital);
  };

  return (
    <section className="modal">
      <div className="container">
        <form onSubmit={aoSalvar}>
          <div className="modal_header">
            <h2>Adicionar novo Robô</h2>
            <button>
              <img
                onClick={onClose}
                src="/assets/X.png"
                alt="Fechar modal"
              ></img>
            </button>
          </div>
          <h1>Vamos criar seu robô</h1>
          <p>Preencha as informações abaixo:</p>
          <div className="campo_texto">
            <CampoTexto
              obrigatorio={true}
              label="Nome do produto"
              placeholder="Nome do produto"
              valor={nome}
              aoAlterado={(valor) => setNome(valor)}
            />

            <CampoTexto
              obrigatorio={true}
              label="Capital inicial do robô"
              placeholder="R$"
              valor={capital}
              aoAlterado={(valor) => setCapital(valor)}
            />
          </div>
          <div className="label_select">
            <label>Selecione uma das estratégias abaixo</label>
            <ul>
              <li>Tangram</li>
              <li>Price Action</li>
            </ul>
          </div>
          <div className="modal_botao">
            <button onClick={onClose}>Cancelar</button>
            <button>Criar robô</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Modal;
