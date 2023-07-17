import "./Card.css";

const Card = () => {
  return (
    <div className="card">
      <div className="card_header">
        <h1>Título do Robô</h1>
        <p>#id</p>
      </div>
      <div className="card_infos">
        <p>Pessimista</p>
        <p>WIN%</p>
        <p>Price action</p>
      </div>
      <div className="card_section">
        <div className="card_value">
          <p>30</p>
        </div>
        <div className="card_paper">
          <p>WING20</p>
          <p>Compra</p>
        </div>
        <div className="card_price">
          <p>114.093.33</p>
          <p>R$32,33</p>
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
  );
};

export default Card;
