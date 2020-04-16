import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import  {cityListItem}  from "./cityListItem";
import { useParams } from "react-router-dom";

function Fu() {

    const { id } = useParams();
  
    return (
        <div>
           <h3>  {id} </h3>
        </div>)
 };
 export default Fu;