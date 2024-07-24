import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.sass']
})
export class DisplayComponent implements OnChanges {

  @Input() time: number | null = null;
  public minutes: string = "00";
  public seconds: string = "00";

  constructor() { }

  ngOnChanges(changes: any): void {
    if (changes.time) {
      const minutes = Math.trunc(changes.time.currentValue / 60);
      const seconds = changes.time.currentValue - minutes * 60;

      this.minutes = ("0" + minutes).substring(-2);
      this.seconds = ("0" + minutes).substring(-2);
    }
  }
}
