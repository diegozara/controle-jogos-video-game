import { Constants } from 'src/app/cadastro-usuarios/constants';
import { User } from '../model/User';

export class Shared {
  constructor() {}


  public static initializeWebStorage(): void {
    if (localStorage.getItem(Constants.USERNAME_KEY) != null) {
      return;
    }

    let user = new User(Constants.USERNAME_KEY, 'qwerty');

    localStorage.setItem(Constants.USERNAME_KEY, JSON.stringify(user));
    localStorage.setItem(Constants.USERS_KEY, JSON.stringify([]));

  }
}