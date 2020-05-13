import React from "react";
import { BrowserRouter as Router, Route, Link , Switch, Redirect} from "react-router-dom";
import AppRouter from "./component/AppRouter";
import CityId from './component/CityId';
import componentDidMount from './component/Async';
import GetData from "./component/Async";





  function App() {
   
    return (
      <div className="App">
     
        { CityId.map ((it) =>  <GetData  props = {it.id}/> ) } 
     

       <AppRouter/>
       
      </div>
    );
  }
  export default App;
