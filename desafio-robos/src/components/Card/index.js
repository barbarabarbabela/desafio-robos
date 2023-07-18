import "./Card.css";
import { useState, useEffect } from "react";
const Card = () => {
  const [data, setData] = useState({});
  // const { id, paper, paper_value, position, profit } = data;

  useEffect(() => {
    fetchRobo();
  }, []);

  async function fetchRobo() {
    const response = await fetch(
      "https://api.k8s.smarttbot.com/api-front-test/api/v1/robot/paper?filter=1",
      {
        method: "GET", //default
        headers: {
          Accept: "application/json",
          Limit: "5", //qual valor devo colocar aqui?
          Order_type: "5",
          Order_field: "5",
        },
      }
    );
    const formatResponse = await response.json();
    setData(formatResponse.data);
  }

  useEffect(() => {

  }, [data]);

  const arrayData = Object.values(data)

  return (
    arrayData.map((item, index) => (
      <section className="section_card">
<div className="card" key="robot_id">
      <div className="card_header">
        <h1>Título do Robô</h1>
        <p>#{arrayData[index].id}</p>
      </div>
      <div className="card_infos">
        <p>Pessimista</p>
        <p>WIN%</p>
        <p>Price action</p>
      </div>
      <div className="card_section">
        <div className="card_value">
          <p>{arrayData[index].position}</p>
        </div>
        <div className="card_paper">
          <p>{arrayData[index].paper}</p>
          <p>Compra</p>
        </div>
        <div className="card_price">
          <p>{arrayData[index].paper_value}</p>
          <p>R$ {arrayData[index].profit}</p>
        </div>
      </div>

      <div className="card_footer">
        <div className="card_saldo">
          <p>Saldo diário</p>
          <p>R$120,00</p>
        </div>

        <div className="card_trades">
          <p>Trades no dia</p>
          <p>4</p>
        </div>
      </div>
    </div>
    </section>
    ))
    
  );
};

export default Card;
