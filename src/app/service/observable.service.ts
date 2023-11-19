import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../model/Usuario';

@Injectable({
    providedIn: 'root',
  })
  export class UsuarioService {
   private URL = "http://localhost:3000/usuarios"

    constructor(private http: HttpClient) {
    }

    getAll(): Observable<Usuario[]> {
      return this.http.get<Usuario[]>(this.URL)
    }

  }
