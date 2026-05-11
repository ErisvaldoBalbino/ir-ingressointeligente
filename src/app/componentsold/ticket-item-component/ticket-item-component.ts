import { Component, input, model, output } from '@angular/core';

@Component({
  selector: 'app-ticket-item-component',
  imports: [],
  templateUrl: './ticket-item-component.html',
  styleUrl: './ticket-item-component.css',
})
export class TicketItemComponent {
  quantidade = model<number>(1);
  onCancelamento = output<void>();

  aumentarQuantidade(): void {
    this.quantidade.update(quantidadeAtual => quantidadeAtual + 1);
  }

  diminuirQuantidade(): void {
    this.quantidade.update(quantidadeAtual => quantidadeAtual - 1);
  }

  cupom(evento: Event) {
    let value = (evento.target as HTMLInputElement).value;
    alert(`Buscando cupom: ${value}`);
  }

  solicitarCancelamento () {
    this.onCancelamento.emit();
  }
}
