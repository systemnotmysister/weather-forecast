import React from "react";
import { cityListItem } from "./CityListItem";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      {cityListItem.map((el) => {
      return <div>{el.name}{el.temp}</div>;
      })}
    </div>
  );
}

export default App;
