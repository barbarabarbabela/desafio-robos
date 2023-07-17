import "./App.css";
import AdicionarRobo from "./components/AdicionarRobo";
import AnaliseGeral from "./components/AnaliseGeral";
import ResumoGeral from "./components/ResumoGeral";
import Modal from "./components/Modal";
import { useState } from "react";
import Card from "./components/Card";

function App() {
  const [isModalOpen, setModalOpen] = useState(false);

  const abrirModal = () => {
    setModalOpen(true);
  };

  const fecharModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="App">
      <AnaliseGeral />
      <ResumoGeral />

      <div onClick={abrirModal}>
        {isModalOpen ? <Modal onClose={fecharModal} /> : <AdicionarRobo /> }
       
      </div>
      <Card />
    </div>
  );
}

export default App;
