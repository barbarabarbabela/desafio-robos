import "./ResumoGeral.css";
import { useState, useEffect } from "react";

const ResumoGeral = () => {
  const [data, setData] = useState({});
  const { moviment_summary, transactions } = data;
  // const movimentSummary = data.moviment_summary

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
    <section className="secao_resumo">
      <div className="secao_geral">
        <h1>Resumo geral operações</h1>
      </div>
      <div className="secao_topo">
        <div className="secao_movimentacao">
          <h2>Resumo de movimentação</h2>
          <h3>R$ {moviment_summary?.toLocaleString()}</h3>
        </div>
        <div className="secao_transacoes">
          <h2>Total de transações realizadas </h2>
          <p>{transactions?.toLocaleString()}</p>
        </div>
      </div>

      <div className="secao_separador"></div>

      <div className="secao_papeis">
        <h2>Papéis negociados</h2>
        {data.papers?.map(
          (
            item //usando o map para iterar dentro do array data.papers
          ) => (
            <div key={item.name}>
              <p className="papeis_transacoes">{item.name}</p>
              <hr></hr>
              <p className="papeis_valor">
                <span>{item.trasactions}</span> transações
              </p>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default ResumoGeral;
