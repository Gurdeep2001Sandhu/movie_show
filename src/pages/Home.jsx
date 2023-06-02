import React, { useState, useEffect } from "react";
import "../styles/Home.css";
import Card from "../components/Card";
// import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  let [shows, setShows] = useState([]);

  const fetchShowData = () => {
    fetch("https://api.tvmaze.com/search/shows?q=all")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setShows(data);
      });
  };

  useEffect(() => {
    fetchShowData();
  }, []);

  return (
    <>
      <div className="container">
        {shows &&
          shows.map((show, index) => (
            <div key={index}>
              <Card show={show} />
            </div>
          ))}
      </div>
    </>
  );
}

export default Home;
