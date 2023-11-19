import { Constants } from '../utils/constants';
import { Usuario } from '../model/Usuario';


export class Shared {
  constructor() {}


  public static initializeWebStorage(): void {
    if (localStorage.getItem(Constants.USERNAME_KEY) != null) {
      return;
    }

    let user = new Usuario(Constants.USERNAME_KEY, 'qwerty');

    localStorage.setItem(Constants.USERNAME_KEY, JSON.stringify(user));
    localStorage.setItem(Constants.USERS_KEY, JSON.stringify([]));
    localStorage.setItem(Constants.LOGGED_IN_KEY, String(false));

  }
}
