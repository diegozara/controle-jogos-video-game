import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoginService } from '../service/login.service';
import { WebStorageUtil } from '../utils/web-storage';
import { Constants } from '../utils/constants';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{

  loggedIn = false;
  subscription!: Subscription;

  constructor(private loginService: LoginService){
    this.subscription = this.loginService.asObservable().subscribe((data) => {
      this.loggedIn = data;
      console.log(data);
      console.log('observer - menu');
    });
  }

  ngOnInit(): void {
      this.loggedIn = WebStorageUtil.get(Constants.LOGGED_IN_KEY) as boolean;
      console.log(this.loggedIn);
      console.log('init - menu');
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
