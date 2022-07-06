import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";


const Dashbourd =()=>{

    const [Dashbourd,serDashbourd]=useState("");

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=1bfa430aada4409bfa6a3c5528128e8a`)
        .then((res) => {
            serDashbourd(res.data);
        })
         
    }, []);


return (
    <div>

    </div>
)

}

export default Dashbourd
