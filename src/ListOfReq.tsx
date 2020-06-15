import React, { Component } from "react";
import CityId from './component/CityId';
import GetData from "./component/FirstRequest";

export default class ListOfReq extends Component {
  constructor(props: Readonly<{}>) {
    super(props);
  }
  render() {
    return (
      <div className="App">
        {CityId.map((it) => <GetData id={it.id} passdata={(newData: any) => {
          this.props.passdata(newData);
        }} />)}
      </div>
    );
  }
}
