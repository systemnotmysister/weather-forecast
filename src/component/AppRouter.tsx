import React, { Component } from "react";
import { BrowserRouter as Switch, Route, Router } from "react-router-dom";
import SecondRequest from "./SecondRequest";
import ListOfReq from "../ListOfReq";
import { ReactComponent } from "*.svg";

class AppRouter extends Component<{},{data:number}> {
	constructor(props: any) {
		super(props);
  }
  

	render() {
    console.log(this.state);
    
		return (
			<Switch>
				<Route path="/:id">
					<SecondRequest  />
				</Route>

				<Route exact  path="/">
					<ListOfReq
					/>
				</Route>
			</Switch>
		);
	}
}
export default AppRouter;
