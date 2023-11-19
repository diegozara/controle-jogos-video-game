import { Component } from '@angular/core';
import { Usuario } from '../model/Usuario';
import { UsuarioService } from '../service/observable.service';

@Component({
  selector: 'app-tela-usuario-observable',
  templateUrl: './tela-usuario-observable.component.html',
  styleUrls: ['./tela-usuario-observable.component.css']
})
export class TelaUsuarioObservableComponent {
  usuarios: Usuario[] = []


  constructor(private serviceUser: UsuarioService){}

  ngOnInit(): void {
    this.serviceUser.getAll()
      .subscribe(
        data => this.usuarios = data,
        error => console.error('Erro ao carregar os usuários:', error)
      );
  }
}
