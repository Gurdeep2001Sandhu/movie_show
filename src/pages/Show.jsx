import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "../styles/Show.css";
import Book from "../components/Book";

const Show = () => {
  const params = useParams();

  let [show, setShow] = useState({});

  const fetchShowData = () => {
    fetch(`https://api.tvmaze.com/shows/${params.id}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setShow(data);
      });
  };

  useEffect(() => {
    fetchShowData();
  }, []);

  return (
    <div className="main">
    <div className="showContainer">
      <div className="showImage">
        <img src={show.image?.medium} alt={show.name} />
      </div>
      <div className="showSummary">{show.summary}</div>
      <div className="bookTickets">
        {/* <Book /> */}
        <Link to={`/bookticket/${show.name}`}>
          <button
            className="btn mt-3"
            style={{ backgroundColor: "black", color: "white" }}
          >
            Book Tickets
          </button>
        </Link>
      </div>
    </div>
    </div>
  );
};

export default Show;
