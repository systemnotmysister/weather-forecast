import React from "react";
import { cityListItem } from "./CityListItem";


const RenderComp = () => {
 return (
    <div className="">
    <header className="App-header"></header>
    {cityListItem.map((el) => {
    return <div>{el.name}, temp :{el.temp}</div>;
    })}
  </div>

)
}