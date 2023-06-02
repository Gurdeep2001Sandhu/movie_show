import React from "react";
import { useParams } from "react-router-dom";
import '../styles/BookTicket.css'

const BookTicket = () => {
  const params = useParams();
  return (
    <div className="bookMain">
    <div className="divBox">
        <div className="buyTicikets">
      <h1>Buy tickets:</h1>
      </div>
      <h3 class="text-muted">{params.name}</h3>
      <p>Cinema:Cinepolis Triton</p>
      <p>Date:Today</p>
      <p>Time:8:20 pm</p>
    </div>
    </div>
  );
};

export default BookTicket;
