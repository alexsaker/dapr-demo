import { Injectable } from '@nestjs/common';
import axios from 'axios';
import {Weather} from "@dapr-demo/weather/models"

const WEATHER_URL="https://api.open-meteo.com/v1/forecast"

@Injectable()
export class AppService {
  getData(): { message: string } {
    return { message: 'Welcome to weather!' };
  }

  async getCurrentWeather(latitude: string, longitude:string): Promise<Weather> {
    const params = { latitude: latitude,longitude:longitude,current_weather:true} 
    const result = await axios.get(`${WEATHER_URL}`,{params:params});
    return result.data as Weather 
  }
}
