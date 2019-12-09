import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ShareDataService } from '../share-data.service';
import { ApiService } from '../services/api.service';
import { FormGroup, FormBuilder } from '@angular/forms';

// const success = (response) => {
// console.log(response)
// return response.details
// }

const showSpinner = (key, index) => {
  console.log(index)
  const spinner = document.querySelectorAll('.default-spinner')[index];
  console.log(spinner);
  if (key === 'show') {
    spinner.classList.remove('d-none');
  } else if (key === 'hide') {
    spinner.classList.add('d-none');
  }
}
declare var $: any;
declare const showModal: any;

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  token: string;
  editInformationForm: FormGroup;
  editPasswordForm: FormGroup;
  uploadImageForm: FormGroup;
  result: any = '';
  responseData: any = '';
  responseState: any = '';
  key;
  index;
  //Image  variable
  imageHolder: any = {};
  @ViewChild('spinner', { static: false }) spinner: ElementRef;
  @ViewChild('submitspan', { static: false }) submitSpan: ElementRef;
  @ViewChild('submitpasswordspan', { static: false }) submitPasswordSpan: ElementRef;
  @ViewChild('overlay', { static: false }) overlay: ElementRef;
  @ViewChild('uploadImageFormElement', { static: false }) uploadImageFormElement: ElementRef;
  @ViewChild('uploadspan', { static: false }) uploadSpan: ElementRef;
  // email = 'default';
  // constructor(private data: ShareDataService) { }
  constructor(
    public apiService: ApiService,
    private formBuilder: FormBuilder
  ) {
  }

  ngOnInit() {
    this.editInformationForm = this.formBuilder.group({
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
    this.editPasswordForm = this.formBuilder.group({
      current_password: [''],
      password: [''],
      password_confirmation: ['']
    });
    this.uploadImageForm = this.formBuilder.group({
      avatar: ['']
    });
    // this.data.currentToken.subscribe(token => this.token = token);
    // this.token = this.data.currentToken.source['_value'];
    // console.log(this.token);
    this.token = localStorage.getItem('token');
    console.log(this.token);
    this.apiService.getUserDetails().subscribe(
      response => {
        console.log(response);
        this.result = response['details'];
      },
      err => {
        console.log(err);
      }

    );
  }
  editUser() {
    // this.spinner.nativeElement.classList.remove('d-none');
    showSpinner(this.key = 'show', this.index = 1);
    this.submitSpan.nativeElement.classList.add('d-none');
    const editUserData = {
      dob: this.editInformationForm.controls.dob.value ? this.editInformationForm.controls.dob.value : this.result.dob,
      pob: this.editInformationForm.controls.pob.value ? this.editInformationForm.controls.pob.value : this.result.pob,
      lga: this.editInformationForm.controls.lga.value ? this.editInformationForm.controls.lga.value : this.result.lga,
      phone: this.editInformationForm.controls.phone.value ? this.editInformationForm.controls.phone.value : this.result.phone,
      state: this.editInformationForm.controls.state.value ? this.editInformationForm.controls.state.value : this.result.state,
      gender: this.editInformationForm.controls.gender.value ? this.editInformationForm.controls.gender.value : this.result.gender,
      address: this.editInformationForm.controls.address.value ? this.editInformationForm.controls.address.value : this.result.address,
      occupation: this.editInformationForm.controls.occupation.value ? this.editInformationForm.controls.occupation.value : this.result.occupation,
      nationality: this.editInformationForm.controls.nationality.value ? this.editInformationForm.controls.nationality.value : this.result.nationality,
      marital_status: this.editInformationForm.controls.marital_status.value ? this.editInformationForm.controls.marital_status.value : this.result.marital_status,
      email: this.editInformationForm.controls.email.value ? this.editInformationForm.controls.email.value : this.result.email,
      first_name: this.editInformationForm.controls.first_name.value ? this.editInformationForm.controls.first_name.value : this.result.first_name,
      last_name: this.editInformationForm.controls.last_name.value ? this.editInformationForm.controls.last_name.value : this.result.last_name
    };
    console.log(editUserData);
    this.apiService.editUserDetails(editUserData).subscribe(
      response => {
        console.log(response);
        this.responseData = response['message'];
        this.responseState = '1';
        showModal(this.responseState);
        showSpinner(this.key = 'hide', this.index = 1);
        this.submitSpan.nativeElement.classList.remove('d-none');
        location.reload();
      },
      err => {
        console.error(err);
        this.responseData = 'Something went wrong. Please check your details!';
        this.responseState = '1';
        showModal(this.responseState);
        showSpinner(this.key = 'hide', this.index = 1);
        this.submitSpan.nativeElement.classList.remove('d-none');
      }
    );
  }
  editPassword() {
    showSpinner(this.key = 'show', this.index = 2);
    this.submitPasswordSpan.nativeElement.classList.add('d-none');
    const editPasswordData = {
      current_password: this.editPasswordForm.controls.current_password.value,
      password: this.editPasswordForm.controls.password.value,
      password_confirmation: this.editPasswordForm.controls.password_confirmation.value
    };
    console.log(editPasswordData);
    this.apiService.editPassword(editPasswordData).subscribe(
      response => {
        console.log(response['Message']);
        this.responseData = response['Message'];
        this.responseState = '1';
        showModal(this.responseState);
        showSpinner(this.key = 'hide', this.index = 2);
        this.submitPasswordSpan.nativeElement.classList.remove('d-none');
      },
      err => {
        console.error(err);
        this.responseData = 'Something went wrong. Please check your details!';
        this.responseState = '1';
        showModal(this.responseState);
        showSpinner(this.key = 'hide', this.index = 2);
        this.submitPasswordSpan.nativeElement.classList.remove('d-none');
      }
    );
  }
  showCog() {
    this.overlay.nativeElement.classList.remove('d-none');
  }
  hideCog() {
    this.overlay.nativeElement.classList.add('d-none');
  }
  showUploadForm() {
    this.uploadImageFormElement.nativeElement.classList.remove('d-none');
  }

  getImage(files: FileList) {
    const file = files.item(0);

    if (file) {
      console.log(file);
      return this.imageHolder = file;
    } else {
      alert('file is empty');
      return false;
    }
  }

  uploadImage() {
    showSpinner(this.key = 'show', this.index = 0);
    this.uploadSpan.nativeElement.classList.add('d-none');
    console.log(this.imageHolder);

    let formData = new FormData();
    formData.append('avatar', this.imageHolder);

    console.log(formData);
    this.apiService.uploadImageApi(formData).subscribe(
      response => {
        console.log(response);
        this.responseData = response['message'];
        this.responseState = '1';
        showModal(this.responseState);
        showSpinner(this.key = 'hide', this.index = 0);
        this.uploadSpan.nativeElement.classList.remove('d-none');
        location.reload();
      },
      err => {
        console.error(err);
        this.responseData = 'Something went wrong. Please check your details!';
        this.responseState = '1';
        showModal(this.responseState);
        showSpinner(this.key = 'hide', this.index = 0);
        this.uploadSpan.nativeElement.classList.remove('d-none');
      }
    )
  }
}
