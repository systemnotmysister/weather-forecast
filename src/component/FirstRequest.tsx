import React, { Component } from "react";
import { Row, Col } from "antd";
import GetData2 from './SecondRequest';
import { Link, Route, Router } from "react-router-dom";

export const apiKey = "6f699dde7f55efea24cc34b40d167d91";

class GetData extends Component<{ id: number },{loading:boolean,data:any}> {
	constructor(props: any) {
		super(props);
		this.state = {
      loading: true,
      data:[]
		};
	}
	async componentDidMount() {
		this.setState({ loading: true });
		try {
			const response = await fetch( ` https://api.openweathermap.org/data/2.5/weather?id=${this.props.id}&appid=${apiKey} ` );
			const data = await response.json();
			this.setState({ data: data });	
			console.log(data)	  
			this.setState({ loading: false });
         }
			catch(e) {		
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
							   <li>   <Link to='/exactcityweather'> {this.state.data.name} </Link>  </li>
						   </Col>	

						     <Col span={2}> temperature: {Math.round(this.state.data.main.temp-273)} </Col>	

						     <Col span={2}> humidity: {this.state.data.main.humidity} </Col>

				    	</Row>	
					</ul>
				</div>
			);
		}
	}
}

export default GetData;
