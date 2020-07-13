
import { render } from 'react-dom';
import { DatePicker, message } from 'antd';
import React, { Component, useState, useEffect } from "react";
import ReactDOM from "react-dom"
import { Row, Col, Divider, Table } from "antd";
import { apiKey } from "./FirstRequest";
import { useParams, Route } from "react-router-dom";
import { stringify } from "querystring";
import { listenerCount } from "process";
import { columns as columns } from './Table';

function GetData2() {

	let { id } = useParams();
	let dataSource;

	const [loading, setLoading] = useState(false);

	async function getData(id: any) {
		const response = await fetch(
			`https://api.openweathermap.org/data/2.5/forecast?id=${id}&appid=${apiKey} `
		);

		const dataResponse = await response.json();
		return dataResponse;
		
	}
	const [data, setData] = useState<any>();

	useEffect(() => {
		getData(id).then((dataResponse) => {
console.log(data);

			if (dataResponse) {
		
			const bla =	dataResponse.list.map((element: any) => {
				
					return {
						
							
						
						dt_txt: element.dt_txt,
						feels_like: Math.round(element.main.feels_like - 273)  ,
						humidity: element.main.humidity,
						pressure: element.main.pressure,
						temp: Math.round(element.main.temp - 273),
						temp_min: Math.round(element.main.temp_min - 273 ),
						temp_max: Math.round(element.main.temp_max - 273)	

						
					}

				})
				console.log('got it ');
				console.log(bla);
				setData(bla)
			
			}


		})
	}, [])




	if (data) {
		return (              
			<Table dataSource={data} columns={columns} />
		)
	}

	else { 

		return (
			<div>
				loading
			</div>)
	}
}



export default GetData2;
