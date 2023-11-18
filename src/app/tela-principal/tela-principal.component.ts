import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Jogo } from '../model/Jogo';
import { JogosService } from '../service/jogos.service';
import { Shared } from '../utils/shared';

@Component({
  selector: 'app-tela-principal',
  templateUrl: './tela-principal.component.html',
  styleUrls: ['./tela-principal.component.css']
})
export class TelaPrincipalComponent implements OnInit {

  @Input() mensagemCad: string= "";
  @Output() mensagemEvent = new EventEmitter<boolean>();

  jogo!: Jogo;
  nomeJogo: string = '';
  jogos?: Jogo[];

  isSubmitted!: boolean;
  isShowMessage: boolean = false;
  isSuccess!: boolean;
  message!: string;

  constructor(private jogosService: JogosService){}

  ngOnInit(): void {
      Shared.initializeWebStorage();
      this.jogos = this.jogosService.getJogos();
  }

  onDelete(nomejogo: string){ let confirmation = window.confirm(
    'Você tem certeza que deseja remover ' + nomejogo
  );
  if (!confirmation) {
    return;
  }
  let response: boolean = this.jogosService.delete(nomejogo);
  this.isShowMessage = true;
  this.isSuccess = response;
  if (response) {
    this.message = 'O item foi removido com sucesso!';
  } else {
    this.message = 'Opps! O item não pode ser removido!';
  }
  this.jogos = this.jogosService.getJogos();
}

  onEdit(jogo: Jogo){
    let clone = new Jogo(jogo.nome, jogo.fabricante,jogo.anoLancamento, jogo.anoCompra,jogo.valor);
    this.jogo = clone;
  }

  eventoEnviarJogo(nome: string){
    this.nomeJogo = nome;
  }

}
