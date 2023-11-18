import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { JogosService } from '../service/jogos.service';
import { Shared } from '../utils/shared';
import { Jogo } from '../model/Jogo';

@Component({
  selector: 'app-tela-cadastro',
  templateUrl: './tela-cadastro.component.html',
  styleUrls: ['./tela-cadastro.component.css']
})
export class TelaCadastroComponent implements OnInit{

  @ViewChild('form') form!: NgForm;

  jogos!: Jogo;
  jogosList?: Jogo[];

  isSubmitted!: boolean;
  isShowMessage: boolean = false;
  isSuccess!: boolean;
  message!: string;

  constructor (private jogosService: JogosService){}

  ngOnInit(): void {
    Shared.initializeWebStorage();
    this.jogos = new Jogo('', '',0,0,'');
    this.jogosList = this.jogosService.getJogos();
  }

  onSubmit() {

    this.isSubmitted = true;

    this.isShowMessage = true;
    this.isSuccess = true;
    this.jogosService.save(this.jogos);
    this.message = 'Cadastro realizado com sucesso!';

    this.form.reset();
    this.jogos = new Jogo('', '', 0, 0,'');
    this.jogosList = this.jogosService.getJogos();
  }


  onEdit(jogos: Jogo) {
    let clone = new Jogo(jogos.nome, jogos.fabricante,jogos.anoLancamento, jogos.anoCompra,jogos.valor);
    this.jogos = clone;
  }

  onDelete(nomejogo: string) {
    let confirmation = window.confirm(
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
    this.jogosList = this.jogosService.getJogos();
  }

  onMensagemEvent(msg: string){
    this.message = msg;
  }
}
