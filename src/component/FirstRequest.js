/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { Row, Col } from "antd";
import { Link } from "react-router-dom";
export const apiKey = "8febdc6fa94887bdb64e6c5cbc5a47cb";




function GetData(props) {
  // const url = `https://api.openweathermap.org/data/2.5/forecast?id=${props.id}&appid=${apiKey} `

  const useFetch = (url) => {
    const [data, setData] = useState(null);

    async function fetchData() {
      const response = await fetch(url);
      const json = await response.json();
      setData(json);
    }

    useEffect(() => { fetchData() }, [url] );
    return data;
  };
 
  const data = useFetch(`https://api.openweathermap.org/data/2.5/forecast?id=${props.id}&appid=${apiKey}`);
  if (!data) {
    return <div>Loading...</div>;
  } else {
    return (
     <div>
        <ul>
 
          <Row>
            <Col span={6}>
              <li>
                <Link to={props.id.toString()}>{data.city.name} </Link>
              </li>
  
            </Col>
 
            <Col span={6}>
  
              current temperature: {Math.round(
                data.list[0].main.temp - 273
              )}
            </Col>
    
            <Col span={6}>wind_speed:{data.list[0].wind.speed}</Col>
     
            <Col span={6}>
 
              description: {data.list[0].weather[0].description}
            </Col>

            {/* скорость ветра м/c влажность давление + иконка + ощущается как  */}
          </Row>

        </ul>
        </div>
       );
  }
}



export default GetData;
