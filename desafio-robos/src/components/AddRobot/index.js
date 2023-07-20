import "./AddRobot.css";

const AddRobot = ({onClick}) => {
  return (
    <div onClick={onClick} className="add_robot">
      <div className="add_image">
        <img src="/assets/adicionar-robo.png" alt="Adicionar novo robô"></img>
      </div>
      <div className="add_text">
        <h1>Adicionar novo Robô</h1>
        <p>
          Você possui <span>02 Robôs</span> disponíveis
        </p>
      </div>
    </div>
  );
};

export default AddRobot;
