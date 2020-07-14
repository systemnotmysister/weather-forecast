import React, { Component } from "react";
import  {  Table } from "antd";



  
export const columns = [
  {
    title: 'date & time ',
    dataIndex: 'dt_txt',
    key: 'dt_txt',
  },
  {
    title: 'feels_like',
    dataIndex: 'feels_like',
    key: 'temp'
  }, 
  {
    title: 'humidity',
    dataIndex:'humidity',
    key: 'humidity',
  },
  {
    title: 'pressure',
    dataIndex: 'pressure',
    key: 'pressure',
  },
    {
      title: 'temp',
      dataIndex: 'temp',
      key: 'temp'
    },  
     
    {
      title: 'temp_min',
      dataIndex: 'temp_min',
      key: 'temp_min',
    },
    {
        title: 'temp_max',
        dataIndex: 'temp_max',
        key: 'temp_max',
      },
      {
        title: 'wind_speed',
        dataIndex: 'speed',
        key: 'speed',
      },
      {
        title: 'description',
        dataIndex: 'description',
        key: 'description',
      },

      {
        title: 'weatherIcon',
        dataIndex: `http://openweathermap.org/img/wn/10d@2x.png10d@2x.png`,
        key: 'weatherIcon',
      }

]

 
  
