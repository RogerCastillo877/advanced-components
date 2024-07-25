import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable()
export class TimerService {

  private countdownTimerRef: any = null;
  public countdown: number = 0;
  public paused: boolean = true;
  private init: number = 0;
  private countdownEndSource = new Subject<void>;
  public countdownEnd$ = this.countdownEndSource.asObservable();

  constructor() { }

  destroy(): void {
    this.clearTimeout();
  }

  restarCountdown(init?: number) {
    if (init) this.init = init;
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
      this.countdownEndSource.next();
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