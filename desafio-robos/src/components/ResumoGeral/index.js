import './ResumoGeral.css'

const ResumoGeral = (props) => {
  return <section className="secao_resumo">
    <div className="secao_geral">
    <h1>Resumo geral operações</h1>
    </div>
    <div className="secao_topo">
      <div className="secao_movimentacao">
        <h2>Resumo de movimentação</h2>
        <h3>-R$200,00</h3>
      </div>
      <div className="secao_transacoes">
        <h2>Total de transações realizadas </h2>
        <p>443</p>
      </div>
      </div>

      <div className="secao_separador"></div>

      <div className="secao_papeis">
        <h2>Papéis negociados</h2>
          <div>
            <p className="papeis_transacoes">WING20</p>
            <hr></hr>
            <p className="papeis_valor"><span>157</span> transações</p>
            <p  className="papeis_transacoes">WING20</p>
            <hr></hr>
            <p className="papeis_valor"><span>157</span> transações</p>
          </div>
          <div>
            <p className="papeis_transacoes">ABEV3</p>
            <hr></hr>
            <p className="papeis_valor"><span>157</span> transações</p>
            <p  className="papeis_transacoes">ABEV3</p>
            <hr></hr>
            <p className="papeis_valor"><span>157</span> transações</p>
          </div>
          <div>
            <p  className="papeis_transacoes">BOVA11</p>
            <hr></hr>
            <p className="papeis_valor"><span>157</span> transações</p>
            <p  className="papeis_transacoes">BOVA11</p>
            <hr></hr>
            <p className="papeis_valor"><span>157</span> transações</p>
          </div>
        </div>
      </section>
      
}

export default ResumoGeral