import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';
import { Subscription } from 'rxjs';
import { WebStorageUtil } from '../cadastro-usuarios/web-storage';
import { Constants } from '../cadastro-usuarios/constants';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  loggedIn = false;
  subscription!: Subscription;


  constructor(private loginService: LoginService){
    this.subscription = this.loginService.asObservable().subscribe((data) => {
      this.loggedIn = data;
      console.log('observer - menu');
    });
  }

  ngOnInit(): void {
      this.loggedIn = WebStorageUtil.get(Constants.LOGGED_IN_KEY) as boolean;
      console.log('init - menu');
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }


}
