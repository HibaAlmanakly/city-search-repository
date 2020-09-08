import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-distance-input',
  templateUrl: './distance-input.component.html',
  styleUrls: ['./distance-input.component.scss']
})
export class DistanceInputComponent implements OnInit {

  /**
   * Max distance value
   */
  distance: string;

  /**
   * Emit max distance value
   */
  @Output() maxDistanceValue: EventEmitter<string> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  maxDistance($event): void {
    this.maxDistanceValue.emit($event);
  }
}
