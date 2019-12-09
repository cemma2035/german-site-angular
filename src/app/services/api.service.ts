import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from '@angular/common/http';
// import { User } from "../models/user";
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // API Path
  enrollPath = 'https://simsapi.herokuapp.com/api/enroll';
  loginPath = 'https://simsapi.herokuapp.com/api/login';
  forgotPath = 'https://simsapi.herokuapp.com/api/password/create';
  getUserDetailsPath = 'https://simsapi.herokuapp.com/api/user';
  editUserDetailsPath = 'https://simsapi.herokuapp.com/api/update';
  editPasswordPath = 'https://simsapi.herokuapp.com/api/password';
  uploadImagePath = 'https://simsapi.herokuapp.com/api/upload';
  apiResponse: any;
  token;

  constructor(private http: HttpClient) {}

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json'
    })
  };

  httpOptionswithToken = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: localStorage.getItem('token')
    })
  };
  httpOptionsForImage = {
    headers: new HttpHeaders({
      Authorization: localStorage.getItem('token')
    })
  }

  // Handle API Errors
  handleError(error: HttpErrorResponse) {
    this.apiResponse = error.error;
    console.log(this.apiResponse);
    // if (error.error instanceof ErrorEvent) {
    //   console.error("An error occured:", error.error.message);
    // } else {
    //   console.error(
    //     `Backend returned code ${error.status}, ` +
    //     `body was ${error}`
    //     error
    //   );
    //   if (error.status === 422) {
    //   }
    // }
    return throwError(this.apiResponse);
  }

  handleGetError(error: HttpErrorResponse) {
    this.apiResponse = error;
    console.log(this.apiResponse);
    return throwError(this.apiResponse);
  }

  // Create a new user
  createUser(addUserData) {
    console.log(addUserData);
    return this.http
      .post(this.enrollPath, addUserData, this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }

  // User login
  loginUser(loginUserData) {
    console.log(loginUserData);
    return this.http
      .post(this.loginPath, loginUserData, this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }

  // Forgot Password
  forgotUser(forgotUserData) {
    console.log(forgotUserData);
    return this.http
      .post(this.forgotPath, forgotUserData, this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }

  // Get user details
  getUserDetails() {

    console.log(this.httpOptionswithToken);
    return this.http
      .get(this.getUserDetailsPath, this.httpOptionswithToken)
      .pipe(retry(1), catchError(this.handleGetError));
  }

  // Edit user details
  editUserDetails(editUserData) {
    return this.http
    .put(this.editUserDetailsPath, editUserData, this.httpOptionswithToken)
    .pipe(retry(1), catchError(this.handleGetError));
  }

  // Edit password
  editPassword(editPasswordData) {
    return this.http
      .post(this.editPasswordPath, editPasswordData, this.httpOptionswithToken)
      .pipe(retry(1), catchError(this.handleError));
  }

  // Upload Image
  uploadImageApi(uploadImageData) {
    return this.http
    .post(this.uploadImagePath, uploadImageData, this.httpOptionsForImage)
    .pipe(retry(1), catchError(this.handleError));
  }
}
