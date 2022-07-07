import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";

const Dashbourd = () => {
  const [movies, setMovies] = useState("");

  const getAllMovies = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=1bfa430aada4409bfa6a3c5528128e8a`
      )
      .then((res) => {
        setMovies(res.data.results);
      });
  };
  useEffect(() => {
    getAllMovies();
  }, []);

  return (
    <div>
      <button> Home</button>
      <button> Faviarote</button>
      <h1 className="title">Movies</h1>
      {/*loop => movies => img, title, description */}
      <div className="moviebox">
      {movies &&
        movies.map((movie,index) => {
          return (
            <div className="movie-continer" key={index}>
              <img 
                className="moive-img"
                src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}
`}/>
              
             
              <h3 className="movie-title">{movie.original_title}</h3>
              <p>{movie.overview}</p>
            </div>
          );
        })}
        </div>
    </div>
  );
};

//component show movie description
//favorite button => add movie fav list
export default Dashbourd;
