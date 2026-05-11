import { Component, computed, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router'; 
import { DatePipe, CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-detalhe-ingresso-component',
  imports: [RouterLink, DatePipe, CurrencyPipe],
  templateUrl: './detalhe-ingresso-component.html',
  styleUrl: './detalhe-ingresso-component.css',
})
export class DetalheIngressoComponent {
  ingressos = signal([
    { id: 1, nome: 'Ingresso 1', tipo: 'VIP', data: new Date('2026-04-17T18:09:38'), preco: 200, descricao: 'Acesso a área VIP do evento', lotePercentual: 80 },
    { id: 2, nome: 'Ingresso 2', tipo: 'MEIA', data: new Date('2026-04-17T08:09:38'), preco: 50, descricao: 'Nenhum', lotePercentual: 15 },
    { id: 3, nome: 'Ingresso 3', tipo: 'STANDARD', data: new Date('2026-04-17T19:09:38'), preco: 100, descricao: 'Nenhum', lotePercentual: 50 },
  ]);

  constructor(private route: ActivatedRoute) {}

  ingressoSelecionado = computed(() => {
    const idUrl = Number(this.route.snapshot.paramMap.get('id'));

    return this.ingressos().find(ingresso => ingresso.id === idUrl);
  })
}
