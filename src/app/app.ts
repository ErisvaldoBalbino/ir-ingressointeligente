import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TicketItemComponent } from './components/ticket-item-component/ticket-item-component';
import { CheckoutComponent } from './components/checkout-component/checkout-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CheckoutComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ingresso-inteligente');
}
