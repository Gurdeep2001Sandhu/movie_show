import React from "react";
import { Link } from "react-router-dom";
import "../styles/Card.css";

const Card = (props) => {
  const { score, show } = props.show;
  console.log(show);
  return (
    <div className="card">
      <div className="imgURL">
        <img src={show.image.medium} alt={show.name} />
      </div>
      <div className="info">
        <h3>{show.name}</h3>
        <p>Language: {show.language}</p>
        <p>{show.status}</p>
      </div>
      <Link className="summaryBtn" to={`/show/${show.id}`}>
        Summary
      </Link>
    </div>
  );
};

export default Card;
