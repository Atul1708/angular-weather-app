import { Component, OnInit } from '@angular/core';
import { LucideContact, Search } from 'lucide-angular';
import { LucideIconData } from 'lucide-angular/icons/types';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';
@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrl: './weather-card.component.css'
})
export class WeatherCardComponent implements OnInit {
  icons: LucideIconData = Search;
  myForm!: FormGroup
  latitude!: number;
  longitude!: number;
  cityName!: string;
  weatherData!: any;
  countryName!: string;
  isDataAvailable: boolean = false;
  showModel: boolean = false;
  modelCityName!: string;
  constructor(private formBuilder: FormBuilder, private apiService: ApiService) { }

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      cityName: ['', [Validators.required]]
    })
  }

  onSubmit(form: FormGroup) {
    this.sendCityName(form.value.cityName);
    this.modelCityName = form.value.cityName;
    this.myForm.reset();
  }

  sendCityName(cityName: string) {
    this.apiService.getLatLong(cityName).subscribe((data: any) => {
      console.log(data);
      const result = data[0];
      if (result) {
        this.cityName = result?.name;
        console.log(this.cityName);
        this.countryName = result?.country;
        console.log(this.countryName);
        this.latitude = result.lat;
        this.longitude = result.lon;
        this.isDataAvailable = true;
        this.getWeatherDetails(this.latitude, this.longitude);
      } else {
        this.showModel = true;
        setTimeout(() => {
          this.showModel = false;
        },3000)
        this.isDataAvailable = false;
      }
    })

  }

  getWeatherDetails(lat: number, lon: number) {
    this.apiService.getWeatherData(lat, lon).subscribe((data: any) => {
      // console.log(data);
      this.weatherData = data;
      console.log(this.weatherData);
    });
  }


  convertKelvinToCelsius(tempInKelvin: number): string {
    return (tempInKelvin - 273.15).toFixed(2);
  }
}
