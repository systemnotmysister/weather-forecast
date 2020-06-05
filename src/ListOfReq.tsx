import React from "react";
import CityId from './component/CityId';
import GetData from "./component/FirstRequest";

export default function ListOfReq() {
  return (<div className="App">

    {CityId.map((it) => <GetData id={it.id} />)}

  </div>);
}
