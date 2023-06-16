import React, { useEffect, useState } from 'react';
import SideBar from './component/sidebar/SideBar';
const Apicall = () => {
    const [temperature, setTemperature] = useState('');
  
    useEffect(() => {
      fetchWeatherData();
    }, []);
  
    const fetchWeatherData = async () => {
      try {
        const apiKey = 'd1c3fe5d3753fd9388b5713af882cba0'; // Replace with your OpenWeatherMap API key
        const city = 'Kolkata';
  
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );
        const data = await response.json();
  
        const currentTemperature = data.main.temp;
  
        setTemperature(currentTemperature);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

  return (
    
     <>
       <div className="whole__page">
        <div className="left_side_navbar">
          <SideBar />
        </div>
        <div className="main_div ">
          <div className="main_inner_div">
          <div>
          <button onClick={fetchWeatherData}>Get Today's Temperature in Kolkata</button>
         {temperature && <p>Today's temperature in Kolkata: {temperature.toFixed(2)} °C</p>}
       </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Apicall;
