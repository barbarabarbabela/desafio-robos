const TextField = (props) => {
  const textTyped = (event) => {
    props.textChanged(event.target.value)
  }
  return (
    <div className="campo-texto">
      <label>
        {props.label}
      </label>
      <input value={props.value} onChange={textTyped} required={props.required} placeholder={props.placeholder} type={props.type}></input>
    </div>
  )
}

export default TextField