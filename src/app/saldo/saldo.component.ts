import { Component, EventEmitter,Input,OnChanges,OnInit,Output,SimpleChanges, ViewChild} from '@angular/core';
import { BalanceComponent } from '../balance/balance.component';

@Component({
  selector: 'app-saldo',
  templateUrl: './saldo.component.html',
  styleUrls: ['./saldo.component.css']
})
export class SaldoComponent implements OnInit, OnChanges{
  @Input() value:number = 0;
  @Output() donationEvent = new EventEmitter<boolean>();
  backgroundColor = 'amber';

  constructor(){}

  @ViewChild(BalanceComponent)
  balanceComponent!: BalanceComponent;

  ngOnChanges(): void {
    if(this.value > 10000)
    setTimeout(() => {
      this.donationEvent.emit(true);
  }, 3000);
      
  }

  ngOnInit(): void {}

  onDblClickBalance(color: string){
    this.backgroundColor = color;
  }
   
  getBackgroundColor(){
    return this.backgroundColor;
  }

  ngAfterViewInit(): void{
    console.log(`Valor: ${this.balanceComponent.value}`);
  }

}
