import { Injectable } from '@angular/core';
import { Constants } from '../utils/constants';
import { WebStorageUtil } from '../utils/web-storage';
import { usuario } from '../model/Usuario';


@Injectable({
    providedIn: 'root',
  })
  export class UsuarioService {
    users!: usuario[];

    constructor() {
        this.users = WebStorageUtil.get(Constants.USERS_KEY);
    }

    save(user: usuario) {
        this.users = WebStorageUtil.get(Constants.USERS_KEY);
        this.users.push(user);
        WebStorageUtil.set(Constants.USERS_KEY, this.users);
    }

    getUsers(): usuario[] {
        this.users = WebStorageUtil.get(Constants.USERS_KEY);
        return this.users;
      }

      do (userPromisse: usuario): Promise<usuario>{

        const p = new Promise<usuario>((resolve, reject) => {
            WebStorageUtil.set(Constants.USERS_KEY, this.users);
        });

        return p;
      }


  }
