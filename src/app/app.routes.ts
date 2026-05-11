import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard-component/dashboard-component';
import { DetalheIngressoComponent } from './components/detalhe-ingresso-component/detalhe-ingresso-component';
import { NotFoundComponent } from './components/not-found-component/not-found-component';

export const routes: Routes = [
   { path:'', redirectTo:'home', pathMatch:'full' },
   { path:'home', component: DashboardComponent },
   { path:'ingresso/:id', component: DetalheIngressoComponent },
   { path:'**', component: NotFoundComponent }
];
