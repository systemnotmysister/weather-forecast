import React from 'react';
import CityId from './CityId';

const apiKey = '3daadc7f2219446fa983a882fe6f52ce'
const url = `https://api.openweathermap.org/data/2.5/weather?q=703448&appid=${apiKey}`

 async function getCityByid() {
    console.log('fetching started...')
    try {
        const response = await fetch(url)
        const cities = await response.json()
        console.log('cities:', cities)
    } catch (e) {
        console.error(e)
    }
 }
 getCityByid()