import Select from "../Select";
import TextField from "../TextField";
import "./Modal.css";
import { useState } from "react";

const Modal = ({ onSubmit, closeModal }) => {
  const [name, setName] = useState("");
  const [capital, setCapital] = useState("");
  const [strategy, setStrategy] = useState("");

  return (
    <section className="modal">
      <div className="container">
        <div className="modal_header">
          <h1>Adicionar novo Robô</h1>
          <button className="modal_close">
            <img
              onClick={closeModal}
              src="/assets/X.png"
              alt="Fechar modal"
            ></img>
          </button>
        </div>

        <h2>Vamos criar seu robô</h2>
        <p>Preencha as informações abaixo:</p>
        <div className="modal_text">
          <TextField
            required={false}
            label="Nome do produto"
            placeholder="Nome do produto"
            value={name}
            type="text"
            textChanged={(value) => setName(value)}
          />
          <TextField
            required={false}
            label="Capital inicial do robô"
            placeholder="R$"
            value={capital}
            type="text"
            textChanged={(value) => setCapital(value)}
          />
        </div>
        <div className="modal_select">
          <Select
            required={false}
            label="Selecione uma das estratégias abaixo"
            value={strategy}
            textChanged={(value) => setStrategy(value)}
          />
        </div>
        <div className="modal_btn">
          <button onClick={closeModal}>Cancelar</button>
          <button onClick={() => onSubmit(name, capital, strategy)}>
            Criar robô
          </button>
        </div>
      </div>
    </section>
  );
};

export default Modal;
