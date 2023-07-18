import "./Card.css";
import { useState, useEffect } from "react";
const Card = () => {
  const [data, setData] = useState({});
  // const { id, paper, paper_value, position, profit } = data;

  useEffect(() => {
    fetchRobo();
  }, []);

  // async function fetchRobo() {
  //   const response = await fetch(
  //     "https://api.k8s.smarttbot.com/api-front-test/api/v1/robot/paper?filter=1",
  //     {
  //       method: "GET", //default
  //       headers: {
  //         Accept: "application/json",
  //         Limit: "1", //qual valor devo colocar aqui?
  //         Order_type: "5",
  //         Order_field: "5",
  //       },
  //     }
  //   );
  //   const formatResponse = await response.json();
  //   setData(formatResponse.data);
  // }

  async function fetchRobo() {
    const response = await fetch(
      "https://api.k8s.smarttbot.com/api-front-test/api/v1/robot",
      {
        method: "GET", //default
        headers: {
          Accept: "application/json",
          Limit: "6", //qual valor devo colocar aqui?
          Order_type: "5",
          Order_field: "5",
        },
      }
    );

    const formatRobot = await response.json();
    setData(formatRobot.data);
  }

  useEffect(() => {}, [data]);

  const arrayData = Object.values(data);

  return arrayData.map((item, index) => (
    <section className="section_card" key={arrayData[index].id}>
      <div className="card">
        <div className="card_header">
          <h1>{arrayData[index].title}</h1>

          <div className="card_status">
            <div className="status"></div>
            {arrayData[index].running === 1 ? "Parado" : "Em execução"}
          </div>
        </div>
        <p className="card_id">#{arrayData[index].id}</p>
        
        <div className="card_infos">
          <p>{arrayData[index].type}</p>
          <p>{arrayData[index].stock_codes}</p>
          <p>Price action</p>
        </div>
        <div className="card_section">
          <div className="card_value">
            <p>{arrayData?.[index]?.last_paper?.position}</p>
          </div>
          <div className="card_paper">
            <p>{arrayData?.[index]?.last_paper?.paper}</p>
            <p>Compra</p>
          </div>
          <div className="card_price">
            <p>{arrayData[index].initial_capital.toLocaleString("pt-BR")}</p>
            <p>
              R${" "}
              {arrayData?.[index]?.last_paper?.profit.toLocaleString("pt-BR")}
            </p>
          </div>
        </div>

        <div className="card_footer">
          <div className="card_saldo">
            <p>Saldo diário</p>
            <p>R$ {arrayData[index].daily_balance.toLocaleString("pt-BR")}</p>
          </div>

          <div className="card_trades">
            <p>Trades no dia</p>
            <p>{arrayData[index].number_trades}</p>
          </div>
        </div>
      </div>
    </section>
  ));
};

export default Card;
