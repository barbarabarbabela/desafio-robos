import './Modal.css'

const Modal = ({onClose = () =>{}}) => {

    return <div className="modal"> 
    <div className="container">
    <form>
      <div className="modal_header"> 

      <h2>Adicionar novo Robô</h2>
      <button><img onClick={onClose} src="/assets/X.png" alt="Fechar modal"></img></button>
      </div>
      <h1>Vamos criar seu robô</h1>
      <p>Preencha as informações abaixo:</p>
      <div className="campo_formulario">
        <label>Nome do produto</label>
        <input placeholder={"Nome do produto"}></input>
        <label>Capital inicial do robô</label>
        <input placeholder={"R$"}></input>
        </div>
        <div className="label_select">
        <label>Selecione uma das estratégias abaixo</label>
        <ul>
          <li>Tangram</li>
          <li>Price Action</li>
        </ul>
        </div>
        <div className="modal_botao">
        <button onClick={onClose}>Cancelar</button>
        <button>Criar robô</button>
        </div>
    </form>
    </div>
  </div>
}

export default Modal