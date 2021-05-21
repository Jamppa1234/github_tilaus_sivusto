import React, { useState } from "react";
import axios from "axios";

import "./App.css";

function App() {
    axios
    .get("http://localhost:4000/")
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  return <div className="App">Hello World!</div>;
}

export default App;