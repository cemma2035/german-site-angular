import { Component, OnInit, ViewChild } from '@angular/core';
import { EinsteinComponent } from '../einstein/einstein.component';
import { ChosenTabService } from '../chosen-tab.service';
import { NgbTabset } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-overall',
  templateUrl: './overall.component.html',
  styleUrls: ['./overall.component.scss']
})
export class OverallComponent implements OnInit {
  tab: string;
  selectedTab: string;
  serviceTab: string;

  constructor(private data: ChosenTabService) {}

  ngOnInit(): void {
    this.data.currentTab.subscribe(tab => (this.tab = tab));
    console.log(this.data.currentTab.source['_value']);
    this.serviceTab = this.data.currentTab.source['_value'];
    if (this.serviceTab === 'lang tab') {
      this.selectedTab = 'lang-tab';
    } else if (this.serviceTab === 'enroll tab') {
      this.selectedTab = 'enroll-tab';
    } else if (this.serviceTab === 'blog tab') {
      this.selectedTab = 'blog-tab';
    } else if (this.serviceTab === 'login tab') {
      this.selectedTab = 'login-tab';
    } else if (this.serviceTab === 'results tab') {
      this.selectedTab = 'results-tab';
    } else {
      this.selectedTab = 'login-tab';
    }

    console.log(this.selectedTab);
  }
}
