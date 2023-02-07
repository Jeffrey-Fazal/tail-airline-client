import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';
import PlanesIndex from "./pages/plane/PlanesIndex";
// import PlaneInfo from "./pages/plane/PlaneInfo";
import FlightsIndex from "./pages/flight/FlightsIndex";
import FlightInfo from "./pages/flight/FlightInfo";
import SearchPage from "./pages/search/SearchPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SearchPage />}></Route>
        <Route path='/search' element={<SearchPage />}></Route>
        <Route path='/planes' element={<PlanesIndex />}></Route>
        <Route path='/flights' element={<FlightsIndex />}></Route>
        <Route path='/flights/:id' element={<FlightInfo />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
