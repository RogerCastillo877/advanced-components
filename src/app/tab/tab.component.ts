import { Component, Input, OnInit } from '@angular/core';
import { Tab } from './tab.interface';
import { TabsComponent } from '../tabs/tabs.component';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.sass']
})
export class TabComponent implements OnInit, Tab {

  @Input() title: string = '';
  public isActive: boolean = false;

  constructor(public tabs: TabsComponent) { }

  ngOnInit(): void {
    this.tabs.addTab(this);
  }
}
