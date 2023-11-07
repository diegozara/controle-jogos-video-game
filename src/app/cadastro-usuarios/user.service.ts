import { Injectable } from '@angular/core';
import { User } from './../model/User';
import { WebStorageUtil } from 'src/app/cadastro-usuarios/web-storage';
import { Constants } from 'src/app/cadastro-usuarios/constants';

@Injectable({
    providedIn: 'root',
  })
  export class UserService {
    users!: User[];
    constructor() {
        this.users = WebStorageUtil.get(Constants.USERS_KEY);
    }
  
    save(user: User) {  
        this.users = WebStorageUtil.get(Constants.USERS_KEY);
        this.users.push(user);
        WebStorageUtil.set(Constants.USERS_KEY, this.users);
    }

    getUsers(): User[] {
        this.users = WebStorageUtil.get(Constants.USERS_KEY);
        return this.users;
      }
  
  }
