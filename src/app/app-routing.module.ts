import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherCardComponent } from './components/weather-card/weather-card.component';

const routes: Routes = [
  { path: "weather-report", component: WeatherCardComponent },
  { path: '**', redirectTo: "/weather-report", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
