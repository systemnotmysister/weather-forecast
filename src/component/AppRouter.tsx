import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Fu from './UseParam';

const AppRouter = () => {
    return (
     <Switch>
       <Router>  
         <Route path ="/id:" child = {<Fu/>}/>
       </Router>
    </Switch>
  )  
 }
 export default AppRouter;
