import React, { Component } from "react";
import { BrowserRouter as  Switch, Route, Router,  } from "react-router-dom";
import SecondRequest from './SecondRequest';
import ListOfReq from '../ListOfReq';
import { ReactComponent } from "*.svg";


class  AppRouter extends Component {
  constructor(props: any) {
		super(props);
		this.state = {
      data: Number
		};
  }
  render () {
    return (
      <Switch>
        <Route path= "/exectcityweather">
          <SecondRequest id= {this.state.data} />
        </Route>

        <Route  path ="/">
          <ListOfReq passdata = { (newData: any) => {
            this.setState({
              data: newData
            });
          }} />
        </Route>

      </Switch>
    )  
  }
 }
 export default AppRouter;
