import React, { Component } from "react";
import CityId from "./component/CityId";
import GetData from "./component/FirstRequest";

export default class ListOfReq extends Component {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        {CityId.map((it) => (
          <GetData id={it.id} />
        ))}
      </div>
    );
  }
}
