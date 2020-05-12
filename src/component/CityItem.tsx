import React from "react";
import { useParams, Link } from "react-router-dom";
import BackPage from "./BackPage";

function CityItem() {

    const { id } = useParams();
    
    return (
        <div>
            <Link to="/"> <BackPage/>  </Link>
           <h3> {id} </h3>
        </div>)
 };
 export default CityItem;