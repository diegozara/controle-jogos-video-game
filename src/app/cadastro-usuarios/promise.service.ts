import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { User } from './../model/User';

@Injectable({
  providedIn: 'root',
})
export class UserPromiseService {
  URL = 'http://localhost:3000/users';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private httpClient: HttpClient) {}

  save(user: User): Promise<User  | undefined> {
    return this.httpClient
      .post<User>(
        this.URL,
        JSON.stringify(user),
        this.httpOptions
      )
      .toPromise();
  }

}