import React from "react";
import { cityListItem } from "./component/cityListItem";
import Foo from './component/Foo'
import { BrowserRouter as Router, Route, Link , Switch} from "react-router-dom";
import imgReact from "./component/imgReact";


function App() {
  return (
    <div className="App">
       <header className="App-header"></header>
         <Foo cityListItem={cityListItem}/>
    <div>
       <Router>  
           <Link to="/react-route">я учу реакт роут</Link>
             <Switch>         
                <Route path="/react-route"> 
                {imgReact}
                </Route>
             </Switch>
       </Router>
   </div>  
    </div>
  );
}
export default App;
