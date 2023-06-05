import React, {FC} from 'react';
import Layout from "@/components/layout/Layout";
import {IWeatherData} from "@/interface/WeatherData";
import Image from "next/image";

const CardWeather:FC<IWeatherData> = ({name, weather, main, wind}) => {

  return (
    <Layout title={name} description="for SEO" >
      <div className="weather-card bg-gray-600 rounded-lg shadow-lg p-4">
        <h2 className="text-2xl font-bold mb-4">{name}</h2>
        <div className="weather-info flex items-center">
          <div className="weather-icon">
            <Image src={`http://openweathermap.org/img/w/${weather[0].icon}.png`} alt="Weather Icon" width={50} height={50}/>
          </div>
          <div className="weather-details ml-4">
            <p className="text-lg">Temperature: {main.temp}°C</p>
            <p className="text-lg">Pressure: {main.pressure} hPa</p>
            <p className="text-lg">Description: {weather[0].description}</p>
            <p className="text-lg">Humidity: {main.humidity}%</p>
            <p className="text-lg">Wind Speed: {wind.speed} m/s</p>
            <p className="text-lg">Wind Deg: {wind.deg}°</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CardWeather;