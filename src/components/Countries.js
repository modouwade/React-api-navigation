import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";

const Countries = () => {
  const [data, setData] = useState([]);
  // const [sortedData, setSortedData] = useState([]);
  // const [playOne, setPlayOne] = useState(true);
  const [rangeValue, setRangeValue] = useState("40");
  const [selectedRadio, setSelectedRadio] = useState("");
  const radios = ["Africa", "America", "Europe", "Asia", "Oceania"];

  useEffect(() => {
    // if (playOne) {
    axios
      .get(
        "http://restcountries.eu/rest/v2/all?fields=name;population;region;capital;flag"
      )
      .then((res) => {
        setData(res.data);
        // setPlayOne(false);
      });
    // }
    // const sortedcountry = () => {
    //   const countryObj = Object.keys(data).map((i) => data[i]);
    //   const sortedArray = countryObj.sort((a, b) => {
    //     return b.population - a.population;
    //   });
    //   sortedArray.length = rangeValue;
    //   setSortedData(sortedArray);
    // };
    // sortedcountry();
    // },[data, playOne, rangeValue]);
  }, []);

  const handleRangeValue = (e) => {
    setRangeValue(e.target.value);
  };

  const handleSelectedRadio = (e) => {
    setSelectedRadio(e.target.value);
  };

  return (
    <div className="countries">
      {/* ****************** Navbar with input range and button radio********************* */}

      <div className="sort-container">
        <input
          type="range"
          min="1"
          max="250"
          value={rangeValue}
          onChange={handleRangeValue}
        />
        <ul>
          {radios.map((r) => (
            <li key={r}>
              <input
                type="radio"
                value={r}
                id={r}
                checked={r === selectedRadio}
                onChange={handleSelectedRadio}
              />
              <label htmlFor={r}>{r}</label>
            </li>
          ))}
        </ul>
      </div>

      {/* ****************** Button Cancel ********************* */}

      <div className="cancel">
        {selectedRadio && (
          <h5
            onClick={() => {
              setSelectedRadio("");
            }}
          >
            Annuler la recherche
          </h5>
        )}
      </div>

      {/* ****************** List Countries********************* */}
      <ul className="countries-list">
        {data
          .filter((country) => country.region.includes(selectedRadio))
          .sort((a, b) => b.population - a.population)
          .filter((country, index) => index < rangeValue)
          .map((country) => (
            <Card countrie={country} key={country.name} />
          ))}
      </ul>
    </div>
  );
};

export default Countries;
