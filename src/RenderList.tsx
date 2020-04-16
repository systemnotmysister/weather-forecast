import React from "react";
import  { cityListItem } from "./component/cityListItem";


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