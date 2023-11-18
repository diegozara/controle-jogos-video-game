import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Usuario } from '../model/Usuario';

@Injectable({
  providedIn: 'root',
})
export class UserPromiseService {
  URL = 'http://localhost:3000/usuarios';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private httpClient: HttpClient) {}

  save(user: Usuario): Promise<Usuario  | undefined> {
    return this.httpClient
      .post<Usuario>(
        this.URL,
        JSON.stringify(user),
        this.httpOptions
      )
      .toPromise();
  }


  getAll(): Promise<Usuario[] | undefined>{
    return this.httpClient.get<Usuario[]>(this.URL).toPromise()
  }

}
