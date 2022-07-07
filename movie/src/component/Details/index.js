import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";

const MovieDetails = () => {
  const [moviee, setmoviee] = useState("");

  const getDetailsMovie = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/475557?language=en-US&api_key=1bfa430aada4409bfa6a3c5528128e8a`
      )
      .then((res) => {
        setmoviee(res.data.results);
      });
  };
  useEffect(() => {
    getDetailsMovie();
  }, []);

  return (
    <div>
      <button> Back To Home</button>
      <button> Go To Favorites </button>
      <button> Add To Favorites </button>
       
    </div>
  );
};

//component show movie description
//favorite button => add movie fav list
export default MovieDetails;
