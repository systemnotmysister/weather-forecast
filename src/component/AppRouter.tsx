import React from "react";
import { BrowserRouter as  Switch, Route,  } from "react-router-dom";
import CityItem from './CityItem';
import imgReact from "./imgReact";
import Foo from "./Foo";
import CityId from './CityId';
import CityArr from './idList';
import gettingWeather from './Async';
import GetData from "./Async";

const AppRouter = () => {
    return (
      <Switch>

       <Route exact path ="/">
          <Foo CityId = {CityId}/>
        </Route>

        <Route  path ="/:id">
          <CityItem/>
<GetData/>          
        </Route>

   </Switch>
  )  
 }
 export default AppRouter;
