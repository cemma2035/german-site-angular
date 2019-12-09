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

declare var $: any;
declare const showModal: any;

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  forgotForm: FormGroup;
  responseData: any = '';
  responseState: any = '';
  @ViewChild('spinner', { static: false }) spinner: ElementRef;
  @ViewChild('loginspan', { static: false }) loginSpan: ElementRef;

  constructor(
    private formBuilder: FormBuilder,
    public apiService: ApiService,
    public router: Router
  ) {}

  ngOnInit() {
    this.forgotForm = this.formBuilder.group({
      email: ['']
    });
  }

  submitForm() {
    this.spinner.nativeElement.classList.remove('d-none');
    this.loginSpan.nativeElement.classList.add('d-none');
    const forgotUserData = {
      email: this.forgotForm.controls.email.value
    };

    this.apiService.forgotUser(forgotUserData).subscribe(
      response => {
        console.log(response);
        this.responseData = response['message'];
        this.responseState = '1';
        showModal(this.responseState);
        this.spinner.nativeElement.classList.add('d-none');
        this.loginSpan.nativeElement.classList.remove('d-none');
      },
      err => {
        console.error(err);
        this.responseData = err;
        this.responseState = '1';
        showModal(this.responseState);
        this.spinner.nativeElement.classList.add('d-none');
        this.loginSpan.nativeElement.classList.remove('d-none');
      }
    );
  }
}
