import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";
import axios from 'axios';
import Homepage from '../home';

function App() {
  return (
 
   <Routes>
{/*home */}
<Route path="/" element={<Home />} />
{/*faviarote */}
<Route path="/" element={<Home />} />
{/*details */}
<Route path="/" element={<Home />} />
 

   </Routes>
 
  );
}

export default App;
