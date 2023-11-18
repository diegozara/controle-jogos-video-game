import { Component } from '@angular/core';
import { UserPromiseService } from '../service/promise.service';
import { Usuario } from '../model/Usuario';

@Component({
  selector: 'app-tela-usuario-promisse',
  templateUrl: './tela-usuario-promisse.component.html',
  styleUrls: ['./tela-usuario-promisse.component.css']
})
export class TelaUsuarioPromisseComponent {
  usuarios: Usuario[] = [];

  constructor(private service: UserPromiseService) { }

  ngOnInit(): void {
    this.service.getAll()
      .then(response => {
        if(response) {
          this.usuarios = response
        }
      })
      .catch(error => {
        console.error('Erro ao obter dados:', error);
      });
  }
}
