import { Component, computed, signal } from '@angular/core';
import { CardComponent } from '../card-component/card-component';
import { CurrencyPipe, DatePipe, NgClass } from '@angular/common';
import { ResumoPipe } from '../../resumo-pipe';
@Component({
  selector: 'app-dashboard-component',
  imports: [CardComponent, CurrencyPipe, DatePipe, NgClass, ResumoPipe],
  templateUrl: './dashboard-component.html',
  styleUrl: './dashboard-component.css',
})
export class DashboardComponent {
    nome = signal("Nome...")
  mensagemStatus = signal("Aguardando finalização...");
  total = computed(() => this.ingressos().reduce((acc, ingresso) => acc + ingresso.preco, 0));
  ingressos = signal([
    { id: 1, nome: 'Ingresso 1', tipo: 'VIP', data: new Date('2026-04-17T18:09:38'), preco: 200, descricao: 'Acesso a área VIP do evento', lotePercentual: 80 },
    { id: 2, nome: 'Ingresso 2', tipo: 'MEIA', data: new Date('2026-04-17T08:09:38'), preco: 50, descricao: 'Nenhum', lotePercentual: 15 },
    { id: 3, nome: 'Ingresso 3', tipo: 'STANDARD', data: new Date('2026-04-17T19:09:38'), preco: 100, descricao: 'Nenhum', lotePercentual: 50 },
  ]);
  qtd = signal(this.ingressos().length);


  notificarUsuario() {
    this.mensagemStatus.set("O usuário solicitou o cancelamento da compra!");
    this.qtd.set(1);
  }

  corDaBarra(lotePercentual: number): string {
    if (lotePercentual < 20) {
      return 'red';
    } else if (lotePercentual <= 50) {
      return 'yellow';
    } else {
      return 'green';
    }
  }

}
