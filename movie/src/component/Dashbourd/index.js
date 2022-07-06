import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";


const Dashbourd =()=>{

    const [Dashbourd,setDashbourd]=useState("");

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=1bfa430aada4409bfa6a3c5528128e8a`)
        .then((res) => {
            setDashbourd(res.data.results);

        })
         
    }, []);


return (
    <div>
        <button> Home</button>
        <button> Faviarote</button>
        <h1>Movies</h1>

        {/*{posts.map((post, i) => {
          return (
            <div>
               <img>{backdrop_path}</img> 
             <h1>{title}</h1>
              <p>{genre_ids}</p>
              <p>{popularity}</p>
              <p>{vote_count}</p>
            </div>
          );
        })}
        */}


       

    </div>
)

}

export default Dashbourd
