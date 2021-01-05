import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  Response } from "@angular/http";
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import { User } from './user.model';

@Injectable()
export class UserService {
  readonly rootUrl = 'https://localhost:44376';
  // readonly rootUrl = 'https://webapidemo20201103160656.azurewebsites.net';
  constructor(private http: HttpClient) { }

  registerUser(user : User){
    const body: User = {
      FirstName: user.FirstName,
      LastName: user.LastName,
      Email: user.Email,
      Password:user.Password,
    }
    // return this.http.post(this.rootUrl + '/api/User/Register', body);
    return this.http.post(this.rootUrl + '/api/Account/Register', body);
  }

}
