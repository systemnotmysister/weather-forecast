import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import  cityListItem  from "./cityListItem";


const AppRouter = (props) => {
    return (
       <Router>  
          { props.cityListItem.map((it) => <Route path = {`/${encodeURIComponent(it.name)}`}></Route> )}
       </Router>
    )   
}
 export default AppRouter;