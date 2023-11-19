import { LoginService } from './../service/login.service';
import { Component, OnInit} from '@angular/core';
import { Usuario } from '../model/Usuario';
import { WebStorageUtil } from '../utils/web-storage';
import { Constants } from '../utils/constants';

@Component({
  selector: 'app-tela-login',
  templateUrl: './tela-login.component.html',
  styleUrls: ['./tela-login.component.css']
})
export class TelaLoginComponent implements OnInit{

  user!: Usuario;
  loginUser!: Usuario;

  constructor(private loginService: LoginService){}

ngOnInit(): void {
    this.loginUser = new Usuario('','');
    this.user = WebStorageUtil.get(Constants.USERNAME_KEY);
}

  onLogin(){
    if (
      this.loginUser.username === this.user.username
       && this.loginUser.password === this.user.password
    ) {
      this.loginService.login();
    } else {
      alert(
        'Usuário ou Senha inválidos'
      );
    }
  }
}
