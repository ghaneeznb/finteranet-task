import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  apiURL = 'https://dummyjson.com';

  constructor(
    private http: HttpClient
  ) { }

  getUsers(): Observable<{ users: Array<IUser> }> {
    return this.http.get<{ users: Array<IUser> }>(this.apiURL + '/users?skip=0&limit=100');
  }
}
