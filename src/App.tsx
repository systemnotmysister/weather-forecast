import React from "react";
import CityId from './component/CityId';
import GetData from "./component/FirstRequest";
import { Route, Router } from "react-router-dom";
import { Switch } from "react-router-dom";
import SecondRequest from './component/SecondRequest';
import AppRouter from './component/AppRouter';




  function App() {
   


    return (

      <AppRouter>
      <div className="App">

        { CityId.map ((it) =>  <GetData id  = {it.id}/> ) } 
       
      </div>
      </AppRouter>
    );


        
    }
  export default App;
