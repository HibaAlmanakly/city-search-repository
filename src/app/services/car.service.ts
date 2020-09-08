import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';

import {FilterCarsRequest} from '../models/filter-cars-request';
import {CarsResultResponse} from '../models/cars-response';

@Injectable({providedIn: 'root'})

export class CarService {
  constructor(private http: HttpClient) {
  }

  /**
   * Filter cars by search criteria
   * @param filter Filter criteria
   */
  filterCars(filter: FilterCarsRequest): Observable<CarsResultResponse[]> {
    let api = `https://api.snappcar.nl/v2/search/query?country=NL`;
    if (filter.lat) {
      api += `&lat=${filter.lat}`;
    }
    if (filter.lng) {
      api += `&lng=${filter.lng}`;
    }
    if (filter.sort) {
      api += `&sort=${filter.sort}`;
    }
    if (filter.maxDistance) {
      api += `&max-distance=${filter.maxDistance}`;
    }
    return this.http.get<any>(api)
      .pipe(
        map((response) => response.results as CarsResultResponse[]),
        catchError(() => throwError('Bad response')));
  }
}
