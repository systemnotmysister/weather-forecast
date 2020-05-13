import React from "react";
import { BrowserRouter as Router, Route, Link , Switch, Redirect} from "react-router-dom";
import AppRouter from "./component/AppRouter";
import CityId from './component/CityId';
import componentDidMount from './component/Async';
import GetData from "./component/Async";





  function App() {
   
    return (
      <div className="App">
     
<<<<<<< HEAD
        { CityId.map ((it) =>  <GetData  props = {it.id}/> ) } 
=======
        { CityId.map ((it:any) =>  <GetData   id = {it.id} /> ) } 
>>>>>>> b8577781e3216e5e8fb3604b89faf68ea8f0e140
     

       <AppRouter/>
       
      </div>
    );
  }
  export default App;
