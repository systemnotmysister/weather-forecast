import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import  {cityListItem}  from "./cityListItem";
import { useParams } from "react-router-dom";
import Fu from './UseParam';

const AppRouter = () => {
    return (
       <Router>  
         <Route path ="/id:" child = {<Fu/>}/>
       </Router>)  
 }
 export default AppRouter;
