import "./Select.css";
import { useState, useEffect } from "react";
const Select = (props) => {
  useEffect(() => {
    fetchStrategies();
  }, []);

  const [strategies, setStrategies] = useState({});

  async function fetchStrategies() {
    const response = await fetch(
      "https://api.k8s.smarttbot.com/api-front-test/api/v1/strategy"
    );

    const formatStrategies = await response.json();

    setStrategies(formatStrategies.data);
  }

  const strategyArray = Object.values(strategies);

  return (
    <div className="label_select">
      <label>{props.label}</label>

      <select
        onChange={(event) => props.textChanged(event.target.value)}
        required={props.required}
        value={props.value}
        size="2"
      >
        {strategyArray.map((item, index) => (
          <option key={index} value={strategies?.[index]?.id}>
            {strategies?.[index]?.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
