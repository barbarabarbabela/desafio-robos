import "./AdicionarRobo.css";

const AdicionarRobo = () => {

  return (
    <div className="adicionar_robo">
      <img src="/assets/adicionar-robo.png" alt="Adicionar novo robô"></img>
      <div className="adicionar_texto">
        <h1>Adicionar novo Robô</h1>
        <p>
          Você possui <span>02 Robôs</span> disponíveis
        </p>
      </div>
    </div>
  );
};

export default AdicionarRobo;
