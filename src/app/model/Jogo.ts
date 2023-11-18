export class Jogo {

  nome: string;
  fabricante: string;
  anoLancamento: number;
  anoCompra: number;
  valor: string;

  constructor(nome: string, fabricante: string, anoLancamento: number, anoCompra: number, valor: string){
    this.nome = nome;
    this.fabricante = fabricante;
    this.anoLancamento = anoLancamento;
    this.anoCompra = anoCompra;
    this.valor = valor;
  }
}
