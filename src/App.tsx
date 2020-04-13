import React from "react";
import { cityListItem } from "./CityListItem";
import Foo from './component/Foo'
function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
<Foo cityListItem={cityListItem}/>
    </div>
  );
}

export default App;
