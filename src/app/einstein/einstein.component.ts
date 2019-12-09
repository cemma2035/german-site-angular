import { Component, OnInit } from '@angular/core';
import { ChosenTabService } from '../chosen-tab.service';

@Component({
  selector: 'app-einstein',
  templateUrl: './einstein.component.html',
  styleUrls: ['./einstein.component.scss']
})
export class EinsteinComponent implements OnInit {
  tab : string;
  // images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
  constructor(private data: ChosenTabService) { }

  ngOnInit() {
    this.data.currentTab.subscribe(tab => this.tab = tab)
  }
  storeLangTab() {
    this.data.changeTab("lang tab")
    console.log(this.data.currentTab)
  }
  storeEnrollTab() {
    this.data.changeTab("enroll tab")
    console.log(this.data.currentTab)
  }
  storeBlogTab() {
    this.data.changeTab("blog tab")
    console.log(this.data.currentTab)
  }
  storeLoginTab() {
    this.data.changeTab("login tab")
    console.log(this.data.currentTab)
  }
  storeResultsTab() {
    this.data.changeTab("results tab")
    console.log(this.data.currentTab)
  }
}
