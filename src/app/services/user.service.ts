import { Injectable } from '@angular/core';


import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {User} from '../model/user.model';

const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};
const API_URL = 'http://localhost:8087/api/test/';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  auth_api = 'http://localhost:8087/api/auth/user';
  constructor(private http: HttpClient) { }
 /* updateUser(id: any, data: any): Observable<any> {
    return this.http.put(`${AUTH_API}/User/update/${id}`, data);
  }
  */
  updateUser(user: User): Observable<User>
  {
    return this.http.put<User>(this.auth_api + '/User/update', user, httpOptions);
    //return this.http.put<User>(this.auth_api, user, httpOptions);
  }


  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text' });
  }

  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + 'user', { responseType: 'text' });
  }

  getModeratorBoard(): Observable<any> {
    return this.http.get(API_URL + 'mod', { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', { responseType: 'text' });
  }



}

/*
const API_URL = 'http://localhost:8080/api/test/';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text' });
  }

  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + 'user', { responseType: 'text' });
  }

  getModeratorBoard(): Observable<any> {
    return this.http.get(API_URL + 'mod', { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', { responseType: 'text' });
  }

}
*/