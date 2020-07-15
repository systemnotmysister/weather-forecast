import 'antd/dist/antd.css';
import React from "react";
import { Route, Router } from "react-router-dom";
import { Switch } from "react-router-dom";
import SecondRequest from "./component/SecondRequest";
import AppRouter from "./component/AppRouter";
import { Table } from "antd";



function App() {
	return <AppRouter />;
}
export default App;
