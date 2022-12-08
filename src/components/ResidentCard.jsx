import axios from "axios";
import React, { useEffect, useState } from "react";
import "./css/card.css"

const ResidentCard = ({ url }) => {
  const [resident, setResident] = useState();

  useEffect(() => {
    axios
      .get(url)
      .then((res) => setResident(res.data))
      .catch((err) => console.log(err));
  }, []);


  return (
    <div className="card"> 
      <header className="card__header">
        <img src={resident?.image} alt="" />
        <div className="card__status">
          <div className={resident?.status + " status"} ></div>
          <span>{resident?.status}</span>
        </div>
      </header>
      <section className="card__section">
        <h3 className="card__name"> <b>{resident?.name}</b> </h3>
        <ul className="card_description">
          <li>
            <span>Species: </span>
            <span>{resident?.species}</span>
          </li>
          <li>
            <span>Origin: </span>
            <span>{resident?.origin.name}</span>
          </li>
          <li>
            <span>Episodes where appear: </span>
            <span>{resident?.episode.length}</span>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default ResidentCard;
