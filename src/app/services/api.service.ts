import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiKey:string = "b18bdaf5b1abb97ac271d680a7461b59"
  constructor(private http:HttpClient) { }
  
  getLatLong(cityName:string) {
    return this.http.get(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=${this.apiKey}`)
  }

  getWeatherData(lat:number,lon:number) {
    return  this.http.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${this.apiKey}`)
  }
}
  