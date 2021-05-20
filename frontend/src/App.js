import React, { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";

function App() {
  const [data, setData] = useState();
  const [haku, setHaku] = useState();
  useEffect(() => {
    axios
      .get(`http://localhost:4000/gettuotteet`)
      .then(function (response) {
        setData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  console.log({ haku });
  return (
    <div className="App">
      <input
        type="text"
        placeholder="Haku"
        onChange={(event) => setHaku(event.target.value)}
      />
      {data?.[1]?.title && <h1>{data[1].title}</h1>}
      {data?.[1]?.extract && <p>{data[1].extract}</p>}
    </div>
  );
}

export default App;
