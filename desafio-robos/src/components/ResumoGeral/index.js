import './ResumoGeral.css'
import { useState, useEffect} from 'react'

const ResumoGeral = () => {

  const [data, setData] = useState({})
  // const {moviment_summary} = data
  const movimentSummary = data.moviment_summary

  useEffect(()=>{
    fetchOverview()
  }, [])

async function fetchOverview () {
 const response = await fetch ('https://api.k8s.smarttbot.com/api-front-test/api/v1/robot/overview') //GET method default
 const formatResponse = await response.json()
 setData(formatResponse.data)
}

useEffect(()=>{
  console.log(data.papers)
}, [data])

console.log(data.papers)


  return <section className="secao_resumo">
    <div className="secao_geral">
    <h1>Resumo geral operações</h1>
    </div>
    <div className="secao_topo">
      <div className="secao_movimentacao">
        <h2>Resumo de movimentação</h2>
        <h3>R$ {movimentSummary}</h3>
      </div>
      <div className="secao_transacoes">
        <h2>Total de transações realizadas </h2>
        <p>{data.open_positions}</p>
      </div>
      </div>

      <div className="secao_separador"></div>

      <div className="secao_papeis">
        <h2>Papéis negociados</h2>
          <div>
            <p className="papeis_transacoes">VARIAVEL</p>
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