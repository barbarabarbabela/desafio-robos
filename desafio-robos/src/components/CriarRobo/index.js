import AdicionarRobo from "../AdicionarRobo";
import Modal from "../Modal";
import "./CriarRobo.css";
import { useState } from "react";

const CriarRobo = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const abrirModal = () => {
    setModalOpen(true);
  };

  const fecharModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="components">

      <div onClick={abrirModal} >
      <AdicionarRobo />
        {isModalOpen ? <Modal onClose={fecharModal} /> : null }
      </div>
    </div>
  );
};

export default CriarRobo;
