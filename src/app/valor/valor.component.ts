import { SaldoComponent } from './../saldo/saldo.component';
import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-valor',
  templateUrl: './valor.component.html',
  styleUrls: ['./valor.component.css']
})
export class ValorComponent implements OnInit, AfterViewInit {
  valor: number;
  constructor(){
    this.valor = 0;
  }

  saldo = {
    value: 0,   
  };

  ngOnInit(): void {}

  ngAfterViewInit(){
      var elems = document.querySelectorAll('select');
      M.FormSelect.init(elems,{});
  }

  onSelectChange(event: Event){
    this.valor = +(event.target as HTMLInputElement).value;
  }

  onButtonClick(){
    alert(`O valor doado é ${this.valor}`);
  }

  onButtonClickAgain(){
    alert('Muito Obrigado');
  }

  onEnterKey(){
    this.onButtonClick();
  }

  onDonationEvent(valor: number){
    this.saldo.value= valor;
  }

}
