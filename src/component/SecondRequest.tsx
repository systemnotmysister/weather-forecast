import React, { Component } from "react";
import { Row, Col } from "antd"
import { apiKey } from "./FirstRequest";


class GetData2 extends Component<{ id: number },{loading:boolean,data:any}> {
	constructor(props: any) {
		super(props);
		this.state = {
      loading: false,
      data:[]
		};
	}
	async componentDidMount() {
		this.setState({ loading: true });
		try {
			const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast/daily?id=${this.props.id}}&cnt={16}&appid=${apiKey}`);
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

				           <Col span={2}> {this.state.data.name}  </Col>	

                             <Col span={2}>   {this.state.data.clouds} </Col>

						     <Col span={2}> temperature: {Math.round(this.state.data.main.temp-273)} </Col>

						   <Col span={2}> humidity: {this.state.data.main.humidity} </Col>
                        
				    	</Row>	
					</ul>
				</div>
			);
		}
	}
}

export default GetData2;
  