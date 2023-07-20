import AddRobot from "../AddRobot";
import Modal from "../Modal";
import "./CriarRobo.css";
import { useState } from "react";

const CriarRobo = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const handleSubmitForm = async (event, name, strategy, capital) => {
    console.log(name, strategy, capital);
    const response = await fetch(
      "https://api.k8s.smarttbot.com/api-front-test/api/v1/robot",
      {
        method: "POST",
        body: JSON.stringify({
          title: name,
          mode: 0,
          strategy_id: strategy,
          initial_capital: capital,
          simulation: 0,
          broker_id: 1,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.status === 200) {
      setModalOpen(false);
      return;
    }
  };

  return (
    <div className="components">
      <div>
        <AddRobot onClick={openModal} />
        {isModalOpen ? <Modal onSubmit={() => handleSubmitForm()} /> : null}
      </div>
    </div>
  );
};

export default CriarRobo;
