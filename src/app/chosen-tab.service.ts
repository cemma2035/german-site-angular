import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChosenTabService {

  private chosenTabSource = new BehaviorSubject<string>("");
  currentTab = this.chosenTabSource.asObservable();

  constructor(){

  }

  changeTab(tab: string) {
    this.chosenTabSource.next(tab);
  }

}
