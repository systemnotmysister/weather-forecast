import React, { Component } from "react";
import { Row, Col } from "antd";
import { apiKey } from "./FirstRequest";
import { useParams } from "react-router-dom";

function GetData2() {
	let { id } = useParams();
	console.log(id);
	
	let data = { name: "bla", clouds: "asds" };
	getData(id).then((data) => {
		data = data;
	});
	
	return (
		<div>
			<ul>
				<Row>
					aasdasds
					<Col span={2}> {data.name} </Col>
					<Col span={2}> {data.clouds} </Col>
					{/* <Col span={2}> temperature: {Math.round(this.state.data.main.temp-273)} </Col> */}
					{/* <Col span={2}> humidity: {this.state.data.main.humidity} </Col> */}
				</Row>
			</ul>
		</div>
	);
}

async function getData(id: number) {
	const response = await fetch(
		`https://api.openweathermap.org/data/2.5/forecast/daily?id=${id}}&cnt={16}&appid=${apiKey}`
	);
	const dataResponse = await response.json();
	return dataResponse;
}

export default GetData2;
