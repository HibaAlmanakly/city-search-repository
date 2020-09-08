import {Component, Input, OnInit, OnChanges, SimpleChanges} from '@angular/core';
import {delay} from 'rxjs/operators';

import {CarService} from '../../services/car.service';
import {FilterCarsRequest} from '../../models/filter-cars-request';
import {CarsResultResponse} from '../../models/cars-response';
import {City} from '../../services/city-search.service';

@Component({
  selector: 'app-cars-results',
  templateUrl: './cars-results.component.html',
  styleUrls: ['./cars-results.component.scss']
})
export class CarsResultsComponent implements OnInit, OnChanges {

  filterRequest: FilterCarsRequest = new FilterCarsRequest();

  @Input() city: City;

  @Input() maxDistance: string;

  @Input() sortBy: string;

  results: CarsResultResponse[];

  constructor(private carService: CarService) {
  }

  ngOnInit() {
    this.getCars();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.city) {
      this.filterRequest.lat = this.city.lat;
      this.filterRequest.lng = this.city.lng;
    }
    if (this.sortBy) {
      this.filterRequest.sort = this.sortBy;
    }
    if (this.maxDistance) {
      this.filterRequest.maxDistance = this.maxDistance;
    }
    this.getCars();
  }

  getCars(): void {
    this.carService.filterCars(this.filterRequest)
      .pipe(delay(500))
      .subscribe((response) => {
        if (response) {
          this.results = response;
        }
      }, (error) => {
        console.log(error);
      });
  }
}
