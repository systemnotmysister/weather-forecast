import { Table, Tag  } from 'antd';
import { render } from 'react-dom';
import React, { Component, useState, useEffect } from "react";
import ReactDOM from "react-dom"
import { apiKey } from "./FirstRequest";
import { useParams, Route } from "react-router-dom";

const { Column, ColumnGroup } = Table;

function GetData2() {

	let { id } = useParams();


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
		
			const dataSource =	dataResponse.list.map((element: any) => {
				
					return (
							
						{
							dt_txt: element.dt_txt,
							feels_like: Math.round(element.main.feels_like - 273)  ,
							humidity: element.main.humidity,
							pressure: element.main.pressure,
							temp: Math.round(element.main.temp - 273),
							temp_min: Math.round(element.main.temp_min - 273 ) ,
							temp_max: Math.round(element.main.temp_max - 273)	,
							speed: element.wind.speed,
							description: element.weather[0].description,
							weatherIconID: element.weather[0].id,
							weatherIcon: element.weather[0].icon
						}
                  
					)

				})
				
				console.log('got it ');
				console.log( dataSource);
				setData(dataSource)
			
			}
		})
	}, [])




	if (data) {
		return (
			<Table dataSource={data}>

				<Column title="date  time" dataIndex="dt_txt" key="dt_txt" />
				<Column title="feels_like" dataIndex="feels_like" key="feels_like" />
				<Column title="temp_min" dataIndex="temp_min" key="temp_min" />
				<Column title="temp_max" dataIndex="temp_max" key="temp_max" />
				<Column title="temp" dataIndex="temp" key="temp" />


				<Column title="humidity" dataIndex="humidity" key="humidity" />
				<Column title="pressure" dataIndex="pressure" key="pressure" />
				<Column title="wind_speed" dataIndex="speed" key="speed" />
				<Column title="description" dataIndex="description" key="description" />

				<Column
					title="weatherIcon"
					dataIndex="weatherIcon"
					key="weatherIcon"
					render={(weatherIcon) => <div key={weatherIcon}>
						<img src={`http://openweathermap.org/img/wn/${weatherIcon}@2x.png`} />
					</div>}
						
				/>
			
			</Table>)

	}

	else { 

		return (
			<div>
				loading
			</div>)
	}
}



export default GetData2;
