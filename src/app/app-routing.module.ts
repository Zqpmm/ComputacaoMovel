import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SistemaComponent } from './sistema/sistema.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Sistema', component: SistemaComponent }
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }