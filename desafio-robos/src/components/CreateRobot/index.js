import AddRobot from "../AddRobot";
import Modal from "../Modal";
import "./CreateRobot.css";
import { useState } from "react";

const CreateRobot = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleSubmitForm = async (name, strategy, capital) => {
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
          accept: "application/json",
        },
      }
    );

    closeModal();
  };

  return (
    <div className="components">
      <div>
        <AddRobot onClick={openModal} />
        {isModalOpen ? (
          <Modal onSubmit={handleSubmitForm} closeModal={closeModal} />
        ) : null}
      </div>
    </div>
  );
};

export default CreateRobot;
