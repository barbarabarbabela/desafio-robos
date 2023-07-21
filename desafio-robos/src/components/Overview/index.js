import "./Overview.css";
import { useState, useEffect } from "react";

const Overview = () => {
  const [data, setData] = useState({});
  const { moviment_summary, transactions } = data;

  useEffect(() => {
    fetchOverview();
  }, []);

  async function fetchOverview() {
    const response = await fetch(
      "https://api.k8s.smarttbot.com/api-front-test/api/v1/robot/overview"
    ); //GET method default
    const formatResponse = await response.json();
    setData(formatResponse.data);
  }

  useEffect(() => {}, [data]);

  return (
    <section className="overview">
      <div className="overview_general">
        <h1>Resumo geral operações</h1>
      </div>
      <div className="overview_header">
        <div className="overview_moviment">
          <h2>Resumo de movimentação</h2>
          <h3>R$ {moviment_summary?.toLocaleString()}</h3>
        </div>
        <div className="overview_transactions">
          <h2>Total de transações realizadas </h2>
          <p>{transactions?.toLocaleString()}</p>
        </div>
      </div>

      <div className="overview_style"></div>

      <div className="overview_papers">
        <h2>Papéis negociados</h2>
        {data.papers?.map(
          (
            item //usando o map para iterar dentro do array data.papers
          ) => (
            <div key={item.name}>
              <p className="papers_transactions">{item.name}</p>
              <hr></hr>
              <p className="papers_value">
                <span>{item.trasactions}</span> transações
              </p>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default Overview;
