import React, { Component } from "react";
import { Row, Col } from "antd";
import GetData2 from "./SecondRequest";
import { Link, Route, Router } from "react-router-dom";

export const apiKey = "8febdc6fa94887bdb64e6c5cbc5a47cb";

class GetData extends Component<
	{ id: number },
	{ loading: boolean; data: any }
> {
	constructor(props: any) {
		super(props);
		this.state = {
			loading: true,
			data: [],
		};
	}
	async componentDidMount() {
		this.setState({ loading: true });
		try {
			const response = await fetch(
			`https://api.openweathermap.org/data/2.5/forecast?id=${this.props.id}&appid=${apiKey} `
			);
			const data = await response.json();
			this.setState({ data: data });
			console.log(data);
			this.setState({ loading: false });
		} catch (e) {
			console.error(e);
		}
	}

	render() {
		if (this.state.loading) {
			return "loading...";
		} 
	
		else {
			return (
				<div>
					<ul>
						<Row>

						 <Col span={2}> 
							   <li>
								  <Link to={this.props.id.toString()}>{this.state.data.city.name}</Link>
							  </li>	
						 </Col>	
							
						   current temperature: {Math.round(this.state.data.list[0].main.temp - 273)}  

						  
						</Row>
					</ul>
				</div>
			);
		}
	}
}

export default GetData;
