import { UserService } from './user.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from './../model/User';
import { Shared } from './shared';

@Component({
  selector: 'app-cadastro-usuarios',
  templateUrl: './cadastro-usuarios.component.html',
  styleUrls: ['./cadastro-usuarios.component.css']
})

export class CadastroUsuariosComponent implements OnInit{

  @ViewChild('form') form!: NgForm;

  user!: User;
  users?: User[];

  isSubmitted!: boolean;
  isShowMessage: boolean = false;
  isSuccess!: boolean;
  message!: string;

  constructor(private userService: UserService){}

  ngOnInit(): void {
    Shared.initializeWebStorage();
    this.user = new User('', '');
    this.users = this.userService.getUsers();
  }

  onSubmit() {
    this.isSubmitted = true;
    this.isShowMessage = true;
    this.isSuccess = true;
    this.userService.save(this.user);
    this.message = 'Cadastro realizado com sucesso!';
    this.form.reset();
    this.user = new User('', '');
    this.users = this.userService.getUsers();
  }

}
