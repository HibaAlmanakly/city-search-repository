import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-sort-input',
  templateUrl: './sort-input.component.html',
  styleUrls: ['./sort-input.component.scss']
})
export class SortInputComponent implements OnInit {

  /**
   * Sort value
   */
  sort: string;

  /**
   * Emit the sort value
   */
  @Output() sortByValue: EventEmitter<string> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  sortBy($event): void {
    this.sortByValue.emit($event);
  }

}
