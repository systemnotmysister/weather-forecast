import React from "react";
import  { cityListItem } from "./component/cityListItem";


const RenderComp = () => {
  return (
     <div>
     {cityListItem.map((el) => {
     return <div>{el.name}, temp :{el.temp}</div>;
     })}
   </div>
 )
 }
 export default RenderComp;