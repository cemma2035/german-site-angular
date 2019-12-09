import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareDataService {

  private storeTokenSource = new BehaviorSubject<string>('default shit');
  currentToken = this.storeTokenSource.asObservable();


  constructor() { }

  changeToken(token: string) {
    this.storeTokenSource.next(token);
  }
}
