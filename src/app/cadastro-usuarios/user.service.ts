import { UserPromiseService } from './promise.service';
import { Injectable } from '@angular/core';
import { User } from './../model/User';
import { WebStorageUtil } from 'src/app/cadastro-usuarios/web-storage';
import { Constants } from 'src/app/cadastro-usuarios/constants';
import { lastValueFrom } from 'rxjs';

@Injectable({
    providedIn: 'root',
  })
  export class UserService {
    users!: User[];
    constructor(userPromiseService: UserPromiseService) {
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

      do (userPromisse: User): Promise<User>{
        
        const p = new Promise<User>((resolve, reject) => {
            WebStorageUtil.set(Constants.USERS_KEY, this.users);
        });

        return p;
      }

  }
