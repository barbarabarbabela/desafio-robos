import "./Card.css";
import { useState, useEffect } from "react";
const Card = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    fetchRobot();
  }, []);

  async function fetchRobot() {
    const response = await fetch(
      "https://api.k8s.smarttbot.com/api-front-test/api/v1/robot",
      {
        method: "GET", //default
        headers: {
          Accept: "application/json",
          Limit: "5",
          Order_type: "1",
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
    <section className="section_card" key={data[index].id}>
      <div className="card">
        <div className="card_header">
          <h1>{data[index].title}</h1>

          {data[index].running === 1 ? (
            <div className="card_status">
              {" "}
              <div className="status_parado"></div>Parado
            </div>
          ) : (
            <div className="card_status">
              {" "}
              <div className="status_execucao"></div>Em execução
            </div>
          )}
        </div>
        <p className="card_id">#{data[index].id}</p>

        <div className="card_infos">
          <p>{data[index].simulation === 1 ? "Pessimista" : "Otimista"}</p>
          <p>{data[index].stock_codes}</p>
          <p>{data[index].type}</p>
        </div>
        <div className="card_section">
          <div className="card_value">
            <p>{data?.[index]?.last_paper?.position ?? "N/A"}</p>
          </div>
          <div className="card_paper">
            <p>{data?.[index]?.last_paper?.paper ?? "N/A"}</p>
            <p>Compra</p>
          </div>
          <div className="card_price">
            <p>{data[index].initial_capital.toLocaleString("pt-BR")}</p>
            <p>
              R${" "}
              {data?.[index]?.last_paper?.profit.toLocaleString("pt-BR") ??
                "N/A"}
            </p>
          </div>
        </div>

        <div className="card_footer">
          <div className="card_saldo">
            <p>Saldo diário</p>
            <p>R$ {data[index].daily_balance.toLocaleString("pt-BR")}</p>
          </div>

          <div className="card_trades">
            <p>Trades no dia</p>
            <p>{data[index].number_trades}</p>
          </div>
        </div>
      </div>
    </section>
  ));
};

export default Card;
