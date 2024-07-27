import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { TimerService } from './timer.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.sass'],
  providers: [TimerService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TimerComponent implements OnInit, OnDestroy {

  @Output() onComplete = new EventEmitter<void>();
  @Input() init: number | string = 20;
  private countdownEndSubscription: Subscription | null = null;
  private countdownSubscription: Subscription | null = null;
  public countdown: number = 0;

  get progress() {
    return +this.init - this.countdown / +this.init * 100;
  }

  constructor(public timer: TimerService, private cdRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.timer.restarCountdown(+this.init);
    this.countdownEndSubscription = this.timer.countdownEnd$.subscribe(() => {
      this.onComplete.emit();
    });

    this.countdownSubscription = this.timer.countdown$.subscribe((data) => {
      this.countdown = data;
      this.cdRef.markForCheck();
    })
  }

  ngOnDestroy(): void {
    this.timer.destroy();
    if (this.countdownEndSubscription) this.countdownEndSubscription.unsubscribe();
    if (this.countdownSubscription) this.countdownSubscription.unsubscribe();
  }
}
