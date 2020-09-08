import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {CityInputComponent} from './components/city-input/city-input.component';
import {CarsResultsComponent} from './components/cars-results/cars-results.component';
import {SortInputComponent} from './components/sort-input/sort-input.component';
import {DistanceInputComponent} from './components/distance-input/distance-input.component';

@NgModule({
  declarations: [
    AppComponent,
    CityInputComponent,
    CarsResultsComponent,
    SortInputComponent,
    DistanceInputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
