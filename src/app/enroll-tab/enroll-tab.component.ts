import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit
} from '@angular/core';
// import { User } from "../models/user";
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';

declare var $: any;
declare const showModal: any;

@Component({
  selector: 'app-enroll-tab',
  templateUrl: './enroll-tab.component.html',
  styleUrls: ['./enroll-tab.component.scss']
})
export class EnrollTabComponent implements OnInit, AfterViewInit {
  // data: User;
  @ViewChild('spinner', { static: false }) spinner: ElementRef;
  @ViewChild('enrollspan', { static: false }) enrollSpan: ElementRef;
  createUserForm: FormGroup;
  message: any;
  responseData: any = '';
  responseState: any = '';
  redirect: string;
  redirectCount = 3;
  token;
  constructor(
    private formBuilder: FormBuilder,
    public apiService: ApiService,
    public router: Router,
    private location: Location
  ) {
    // this.data = new User();
    // console.log(this.data);
  }

  ngOnInit() {
    console.log(this.responseData);
    this.createUserForm = this.formBuilder.group({
      dob: [''],
      pob: [''],
      lga: [''],
      phone: [''],
      state: [''],
      gender: [''],
      address: [''],
      occupation: [''],
      nationality: [''],
      marital_status: [''],
      email: [''],
      first_name: [''],
      last_name: ['']
    });
  }
  ngAfterViewInit() {
    console.log(this.spinner);
  }

  submitForm() {
    this.spinner.nativeElement.classList.remove('d-none');
    this.enrollSpan.nativeElement.classList.add('d-none');
    console.log(this.createUserForm.value);

    const addUserData = {
      dob: this.createUserForm.controls.dob.value,
      pob: this.createUserForm.controls.pob.value,
      lga: this.createUserForm.controls.lga.value,
      phone: this.createUserForm.controls.phone.value,
      state: this.createUserForm.controls.state.value,
      gender: this.createUserForm.controls.gender.value,
      address: this.createUserForm.controls.address.value,
      occupation: this.createUserForm.controls.occupation.value,
      nationality: this.createUserForm.controls.nationality.value,
      marital_status: this.createUserForm.controls.marital_status.value,
      email: this.createUserForm.controls.email.value,
      first_name: this.createUserForm.controls.first_name.value,
      last_name: this.createUserForm.controls.last_name.value
    };
    this.apiService.createUser(addUserData).subscribe(
      response => {
        console.log(addUserData);
        console.log(response);
        this.responseData = response['message'];
        this.token = 'Bearer ' + response['token'];
        localStorage.setItem('token', this.token);
        console.log(this.token);
        this.responseState = '1';
        this.redirect = 'yes';
        showModal(this.responseState);
        this.redirectCounter();
        this.spinner.nativeElement.classList.add('d-none');
        this.enrollSpan.nativeElement.classList.remove('d-none');
      },
      err => {
        console.error(err.message);
        this.responseData = "One or more of your details are incorrect. Please  check and try again";
        this.responseState = '2';
        this.redirect = 'no';
        showModal(this.responseState);
        this.spinner.nativeElement.classList.add('d-none');
        this.enrollSpan.nativeElement.classList.remove('d-none');
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
