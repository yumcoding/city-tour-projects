import React, { Component, Fragment } from "react";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import TourList from "./components/TourList";

function App() {
  return (
    <Fragment>
      <Navbar />
      <TourList />
    </Fragment>
  );
}

export default App;
