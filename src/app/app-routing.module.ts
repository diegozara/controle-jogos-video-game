import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValorComponent } from './valor/valor.component';
import { TelaPrincipalComponent } from './tela-principal/tela-principal.component';

const routes: Routes = [{path: 'principal', component: ValorComponent},
                        {path: '', component: TelaPrincipalComponent},
                        {path: 'principal/:info', component: ValorComponent},
                        
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
