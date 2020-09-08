import {Component} from '@angular/core';

import {City} from './services/city-search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  /**
   * City name
   */
  searchText: City;

  /**
   * Sort by
   */
  sortBy: string;

  /**
   * Max distance
   */
  maxDistance: string;

  constructor() {

  }

  /**
   * Get the city name
   * @param $event city name
   */
  searchByCityName($event: City): void {
    this.searchText = $event;
  }

  /**
   * Get the sort by value
   * @param $event Sort by value
   */
  sortByValue($event: string): void {
    this.sortBy = $event;
  }

  /**
   * Get the max distance
   * @param $event Max distance
   */
  maxDistanceValue($event: string): void {
    this.maxDistance = $event;
  }
}
