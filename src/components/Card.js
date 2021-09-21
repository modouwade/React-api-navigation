import React from "react";
const numberFormat = (x) => {
  return x.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, " ");
};
const Card = (props) => {
  const { name, flag, capital, region, population } = props.countrie;
  return (
    <div>
      <li className="card">
        <img src={flag} alt="flag" />
        <div className="data-container">
          <ul>
            <li>{name}</li>
            <li>{capital}</li>
            <li>{region}</li>
            <li>Pop. {numberFormat(population)}</li>
          </ul>
        </div>
      </li>
    </div>
  );
};

export default Card;
