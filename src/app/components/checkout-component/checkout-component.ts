import { Component, computed, signal } from '@angular/core';
import { TicketItemComponent } from '../ticket-item-component/ticket-item-component';
import { CardComponent } from '../card-component/card-component';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { ResumoPipe } from '../../resumo-pipe';

@Component({
  selector: 'app-checkout-component',
  imports: [TicketItemComponent, CardComponent, CurrencyPipe, DatePipe, ResumoPipe],
  templateUrl: './checkout-component.html',
  styleUrl: './checkout-component.css',
})
export class CheckoutComponent {
  nome = signal("Nome...")
  mensagemStatus = signal("Aguardando finalização...");
  total = computed(() => this.ingressos().reduce((acc, ingresso) => acc + ingresso.preco, 0));
  ingressos = signal([
    { id: 1, nome: 'Ingresso 1', tipo: 'VIP', data: new Date('2026-04-17T18:09:38'), preco: 200, descricao: 'Acesso a área VIP do evento' },
    { id: 2, nome: 'Ingresso 2', tipo: 'MEIA', data: new Date('2026-04-17T08:09:38'), preco: 50, descricao: 'Nenhum' },
    { id: 3, nome: 'Ingresso 3', tipo: 'STANDARD', data: new Date('2026-04-17T19:09:38'), preco: 100, descricao: 'Nenhum' },
  ]);
  qtd = signal(this.ingressos().length);


  notificarUsuario() {
    this.mensagemStatus.set("O usuário solicitou o cancelamento da compra!");
    this.qtd.set(1);
  }

}
