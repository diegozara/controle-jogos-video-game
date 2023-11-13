import { LoginService } from './login.service';
import { Component,OnInit, ViewChild } from '@angular/core';
import { User } from './../model/User';
import { WebStorageUtil } from '../cadastro-usuarios/web-storage';
import { Constants } from '../cadastro-usuarios/constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  user!: User;
  loginUser!: User;
  constructor(private loginService: LoginService) {}

  ngOnInit(): void {
    this.loginUser = new User('', '');
    this.user = WebStorageUtil.get(Constants.USERNAME_KEY);
  }

  onLogin() {
    if (
      this.loginUser.username === this.user.username 
      // && this.loginUser.password === this.user.password
    ) {
      this.loginService.login();
    } else {
      alert(
        'Oppsss! Por favor, verifique seu nome de usuário ou senha e tente novamente!'
      );
    }
  }
}