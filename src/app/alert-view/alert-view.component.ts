import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-alert-view',
  templateUrl: './alert-view.component.html',
  styleUrls: ['./alert-view.component.sass']
})
export class AlertViewComponent implements OnInit {

  @Output() onCancel = new EventEmitter<void>();
  @Output() onSubmit = new EventEmitter<number>();

  public time: number = 0;

  constructor() { }

  ngOnInit(): void {
  }
}
