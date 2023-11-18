import { Jogo } from '../model/Jogo';
import { Observable, Observer, Subject } from 'rxjs';

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Constants } from '../utils/constants';
import { WebStorageUtil } from '../utils/web-storage';

@Injectable({
  providedIn: 'root',
})
export class JogosService {

  jogos!: Jogo[];

  constructor() {
      this.jogos = WebStorageUtil.get(Constants.JOGOS_KEY);
  }

  save(jogos: Jogo) {
      this.jogos = WebStorageUtil.get(Constants.USERS_KEY);
      this.jogos.push(jogos);
      WebStorageUtil.set(Constants.JOGOS_KEY, this.jogos);
  }

  getJogos(): Jogo[] {
      this.jogos = WebStorageUtil.get(Constants.JOGOS_KEY);
      return this.jogos;
    }

    update(jogos: Jogo){
      this.jogos = WebStorageUtil.get(Constants.JOGOS_KEY);
      this.delete(jogos.nome);
      this.save(jogos);
    }

    delete(nome: string): boolean{
      this.jogos = WebStorageUtil.get(Constants.JOGOS_KEY);
      this.jogos = this.jogos.filter((jog) => {
        return jog.nome?.valueOf() != nome?.valueOf();
      });

      WebStorageUtil.set(Constants.JOGOS_KEY, this.jogos);
       return true;
    }

    isExist(value: string): boolean {
      this.jogos = WebStorageUtil.get(Constants.JOGOS_KEY);
      for (let u of this.jogos) {
        if (u.nome?.valueOf() == value?.valueOf()) {
          return true;
        }
      }
      return false;
    }

    getUsers(): Jogo[] {
      this.jogos = WebStorageUtil.get(Constants.JOGOS_KEY);
      return this.jogos;
    }

    do (jogosPromisse: Jogo): Promise<Jogo>{

      const p = new Promise<Jogo>((resolve, reject) => {
          WebStorageUtil.set(Constants.JOGOS_KEY, this.jogos);
      });

      return p;
    }


}
