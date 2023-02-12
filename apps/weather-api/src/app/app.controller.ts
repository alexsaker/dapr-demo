import { Controller, Get, Query } from '@nestjs/common';
import {Weather} from "@dapr-demo/weather/models"

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData() {
    return this.appService.getData();
  }

  @Get("weather")
  getWeather(@Query('latitude') latitude: string,@Query('longitude') longitude: string):Promise<Weather> {
    console.table([latitude,longitude])
    return this.appService.getCurrentWeather(latitude,longitude);
  }
}
