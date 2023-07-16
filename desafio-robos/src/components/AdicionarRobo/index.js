import Modal from '../Modal';
import './AdicionarRobo.css'

const AdicionarRobo = () => {

  const abrirModal = (evento) => {
    console.log("Abrir Modal!");
  };

  return <div onClick={abrirModal} className="adicionar_robo">
    <img src="/assets/adicionar-robo.png" alt="Adicionar novo robô"></img>
  <div className="adicionar_texto">
    <h1>Adicionar novo Robô</h1>
    <p>Você possui <span>02 Robôs</span> disponíveis</p>
    </div>
  </div>

}

export default AdicionarRobo