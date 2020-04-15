import React from "react";
import { cityListItem } from "./cityListItem";


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