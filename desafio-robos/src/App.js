import "./App.css";
import AdicionarRobo from "./components/AdicionarRobo";
import AnaliseGeral from "./components/AnaliseGeral";
import ResumoGeral from "./components/ResumoGeral";
import Modal from "./components/Modal";
import { useState } from "react";
import Card from "./components/Card";
import CriarRobo from "./components/CriarRobo";

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
      <CriarRobo />
      <Card />
    </div>
  );
}

export default App;
