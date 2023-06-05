import axios from "axios";
import {IWeatherData} from "@/interface/WeatherData";

const API_URL = process.env.API_URL
const UNITS = process.env.UNITS
const KEY = process.env.KEY


export const WeatherService = {
  async getByCity(city: string) {
    const {data} = await axios.get<IWeatherData>(API_URL + city + UNITS + KEY)
    return data
  }
}