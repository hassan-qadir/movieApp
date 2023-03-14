import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import Movie from "./Movie";
import Searching from "./Searching";
function App() {
  return (
  <>
  <BrowserRouter>
  <Routes>
  <Route path="/" element={ <Searching/> }/>
    <Route path="/movie/:id" element={ <Movie /> }/>
  </Routes>
  </BrowserRouter>
  </>
  );
}

export default App;
