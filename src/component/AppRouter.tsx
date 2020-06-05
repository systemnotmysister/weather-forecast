import React from "react";
import { BrowserRouter as  Switch, Route,  } from "react-router-dom";
import Foo from "./Foo";
import CityId from './CityId';
import SecondRequest from './SecondRequest';

const AppRouter = () => {
    return (
      <Switch>

<Route path= "/exectcityweather" component = {SecondRequest}/>

       <Route exact path ="/">
          <Foo CityId = {CityId}/>
        </Route>


   </Switch>
  )  
 }
 export default AppRouter;
