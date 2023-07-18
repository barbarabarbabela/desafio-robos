import "./Select.css";
import { useState } from "react";

const Select = (props) => {
  return (
    <div className="label_select">
              <label>{props.label}</label>
      <select onChange={evento => props.aoAlterado(evento.target.value)} multiple required={props.required} value={props.value}>
        <option value="Tangram">Tangram</option>
        <option value="Price Action">Price Action</option>
      </select>
    </div>
  );
};

export default Select;
