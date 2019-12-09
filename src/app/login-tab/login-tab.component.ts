import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit
} from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
// import { ShareDataService } from '../share-data.service';

declare var $: any;
declare const showModal: any;

@Component({
  selector: 'app-login-tab',
  templateUrl: './login-tab.component.html',
  styleUrls: ['./login-tab.component.scss']
})
export class LoginTabComponent implements OnInit {
  loginForm: FormGroup;
  responseData: any = '';
  responseState: any = '';
  redirect: string;
  redirectCount = 3;
  token;
  @ViewChild('spinner', { static: false }) spinner: ElementRef;
  @ViewChild('loginspan', { static: false }) loginSpan: ElementRef;

  constructor(
    private formBuilder: FormBuilder,
    public apiService: ApiService,
    public router: Router
  ) {}

  ngOnInit() {
    // this.data.currentToken.subscribe(token => this.token = token);
    this.loginForm = this.formBuilder.group({
      user_id: [''],
      password: ['']
    });
  }

  submitForm() {
    this.spinner.nativeElement.classList.remove('d-none');
    this.loginSpan.nativeElement.classList.add('d-none');
    const loginUserData = {
      user_id: this.loginForm.controls.user_id.value,
      password: this.loginForm.controls.password.value
    };
    this.apiService.loginUser(loginUserData).subscribe(
      response => {
        console.log(response);
        this.responseData = response['message'];
        this.token = response['token_type'] + ' ' + response['token'];
        localStorage.setItem('token', this.token);
        // this.data.changeToken(this.token);
        // console.log(this.data.currentToken);
        // console.log(this.data.currentToken.source['_value']);
        this.responseState = '1';
        this.redirect = 'yes';
        showModal(this.responseState);
        this.redirectCounter();
        this.spinner.nativeElement.classList.add('d-none');
        this.loginSpan.nativeElement.classList.remove('d-none');
      },
      err => {
        console.error(err);
        this.responseData = 'Something went wrong. Please check your details!';
        this.responseState = '1';
        this.redirect = 'no';
        showModal(this.responseState);
        this.spinner.nativeElement.classList.add('d-none');
        this.loginSpan.nativeElement.classList.remove('d-none');
      }
    );
  }
  redirectPage() {
    if (this.redirectCount === 1) {
      location.replace('/profile');
    }
    this.redirectCount = this.redirectCount - 1;
  }
  redirectCounter() {
    setInterval(() => {
      this.redirectPage();
    }, 1000);
  }
}
