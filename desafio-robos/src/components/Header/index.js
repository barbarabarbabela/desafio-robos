import "./Header.css";

//Cabeçalho do projeto
const Header = () => {
  return (
    <div className="header">
      <img src="/assets/analise-logo.png" alt="Logo da seção inicial"></img>
      <div className="header_break"></div>
      <h1>
        Análise Geral <span className="header_markup">/</span>
        <span className="header_title">Principal</span>
      </h1>
    </div>
  );
};

export default Header;
