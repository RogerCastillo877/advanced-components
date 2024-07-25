import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { TimerService } from './timer.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.sass'],
  providers: [TimerService]
})
export class TimerComponent implements OnInit, OnDestroy {

  @Output() onComplete = new EventEmitter<void>();
  @Input() init: number = 20;
  private countdownEndSubscription: Subscription | null = null;

  constructor(public timer: TimerService) { }

  ngOnInit(): void {
    this.timer.restarCountdown(this.init);
    this.countdownEndSubscription = this.timer.countdownEnd$.subscribe(() => {
      console.log("--countdown end--");
      this.onComplete.emit();
    });
  }

  ngOnDestroy(): void {
    this.timer.destroy();
    this.countdownEndSubscription!.unsubscribe();
  }
}
