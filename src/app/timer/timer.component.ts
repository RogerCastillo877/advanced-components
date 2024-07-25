import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { TimerService } from './timer.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.sass'],
  providers: [TimerService]
})
export class TimerComponent implements OnInit, OnDestroy {

  @Output() onComplete = new EventEmitter<void>();
  @Input() init: number = 20;

  constructor(public timer: TimerService) { }

  ngOnInit(): void {
    this.timer.restarCountdown(this.init);
  }

  ngOnDestroy(): void {
    this.timer.destroy();
  }
}
