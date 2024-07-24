import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.sass']
})
export class TimerComponent implements OnInit, OnDestroy {

  @Output() onComplete = new EventEmitter<void>();
  @Input() init: number = 20;

  private countdownTimerRef: any = null;
  public countdown: number = 0;
  public paused: boolean = true;

  constructor() { }

  ngOnInit(): void {
    if (this.init && this.init > 0) {
      this.countdown = this.init;
    }
  }

  ngOnDestroy(): void {
    this.clearTimeout();
  }

  restarCountdown() {
    if (this.init && this.init > 0) {
      this.paused = true;
      this.clearTimeout();
      this.countdown = this.init;
    }
  }

  toogleCountdown() {
    this.paused = !this.paused;

    if (this.paused == false) {
      this.doCountdown();
    } else {
      this.clearTimeout();
    }
  }

  doCountdown() {
    this.countdownTimerRef = setTimeout(() => {
      this.countdown = this.countdown - 1;
      this.progressCountdown();
    }, 1000);
  }

  progressCountdown() {
    if (this.countdown == 0) {
      this.onComplete.emit();
      console.log("--Countdown end--");
    } else {
      this.doCountdown();
    }
  }

  clearTimeout() {
    if (this.countdownTimerRef) {
      clearTimeout(this.countdownTimerRef);
      this.countdownTimerRef = null;
    }
  }
}
