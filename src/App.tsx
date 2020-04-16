import React from "react";
import { cityListItem } from "./component/cityListItem";
import Foo from './component/Foo'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AppRouter from './component/AppRouter'

function App() {
  return (
    <div className="App">
       <header className="App-header"></header>
         <Foo cityListItem={cityListItem}/>
         
    </div>
  );
}
export default App;
