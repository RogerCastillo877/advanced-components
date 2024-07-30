import { AfterContentInit, Component, ContentChild, OnDestroy, OnInit } from '@angular/core';
import { Tab } from '../tab/tab.interface';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.sass']
})
export class TabsComponent implements OnInit, AfterContentInit, OnDestroy {

  @ContentChild(TabComponent) tab!: TabComponent;

  public tabs: Tab[] = [];
  public tabClickSubscription: any;

  constructor() { }

  ngOnInit() { }

  ngOnDestroy(): void {
    if (this.tabClickSubscription) {
      this.tabClickSubscription.unsubscribe();
    }
  }

  ngAfterContentInit(): void {
    if (this.tab) {
      console.log(this.tab);
      this.addTab(this.tab);
      this.tabClickSubscription = this.tab.onClick.subscribe(() => { console.log("tab content click detected") });
    }
  }

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
