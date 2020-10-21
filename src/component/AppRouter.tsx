import React, { Component } from "react";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import SecondRequest from "./SecondRequest";
import ListOfReq from "../ListOfReq";

class AppRouter extends Component<{}, { data: Number }> {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(props: any) {
    super(props);
  }

  render() {
    console.log(this.state);

    return (
      <Switch>
        <Route path="/:id">
          <SecondRequest />
        </Route>

        <Route exact path="/">
          <ListOfReq />
        </Route>
      </Switch>
    );
  }
}
export default AppRouter;
