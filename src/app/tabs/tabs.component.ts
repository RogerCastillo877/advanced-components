import { Component, OnInit } from '@angular/core';
import { Tab } from '../tab/tab.interface';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.sass']
})
export class TabsComponent implements OnInit {

  public tabs: Tab[] = [];

  constructor() { }

  ngOnInit() { }

  addTab(tab: Tab) {
    if (this.tabs.length === 0) {
      tab.isActive = true;
    }
    this.tabs.push(tab);
  }

  selectTab(tab: Tab) {
    for (let tab of this.tabs) {
      tab.isActive = false;
    }
    tab.isActive = true;
  }
}  
