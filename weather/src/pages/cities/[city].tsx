import React from 'react';
import {GetStaticPaths, GetStaticProps} from "next";
import {WeatherService} from "@/services/weather.service";
import CardWeather from "@/components/ui/cardWeather/cardWeather";
import {cities} from "@/mocks/cities.mock";
import {IWeatherData} from "@/interface/WeatherData";

const CityPage = ({city}: any) => {
  return (
    <CardWeather {...city}/>
  );
};

export default CityPage


export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: cities.map(city => ({
      params: {
        city,
      },
    })),
    fallback: 'blocking'
  };
};

export const getStaticProps: GetStaticProps<{city: IWeatherData }> = async ({params }) =>  {
  const city = await WeatherService.getByCity(String(params?.city))

  return {
    props: {city}
  }
}
