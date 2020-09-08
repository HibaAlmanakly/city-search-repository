import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {delay} from 'rxjs/operators';

import {CitySearchService, City} from '../../services/city-search.service';

@Component({
  selector: 'app-city-input',
  templateUrl: './city-input.component.html',
  styleUrls: ['./city-input.component.scss']
})
export class CityInputComponent implements OnInit {

  cityName: string;

  citiesList: City[] = [];

  errorMessage: string;

  isLoading = false;

  @Output() updatedCityName: EventEmitter<City> = new EventEmitter();

  constructor(private citySearchService: CitySearchService) {
  }

  ngOnInit() {
  }

  updateCity(): void {
    this.isLoading = !!this.cityName;
    this.citySearchService.searchCities(this.cityName)
      .pipe(delay(500))
      .subscribe((citiesList) => {
          this.citiesList = citiesList;
          if (this.citiesList.length > 0) {
            this.updatedCityName.emit(this.citiesList[0]);
          }
          if (!this.cityName) {
            this.citiesList = [];
            const resetCity: City = {name: '', lat: '', lng: ''} as City;
            this.updatedCityName.emit(resetCity);
          }
        },
        () => {
          this.errorMessage = 'Something went wrong. Please try again.';
        },
        () => this.isLoading = false
      );
  }
}
