import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TelaPrincipalComponent } from './tela-principal/tela-principal.component';
import { TelaLoginComponent } from './tela-login/tela-login.component';
import { TelaCadastroComponent } from './tela-cadastro/tela-cadastro.component';
import { TelaUsuarioObservableComponent } from './tela-usuario-observable/tela-usuario-observable.component';
import { TelaUsuarioPromisseComponent } from './tela-usuario-promisse/tela-usuario-promisse.component';

const routes: Routes = [{path: 'principal', component: TelaPrincipalComponent},
                        {path: '', component: TelaLoginComponent},
                        {path: 'cadastro', component: TelaCadastroComponent},
                        {path: 'usuarios', component: TelaUsuarioObservableComponent},
                        {path: 'usuarios/:info', component: TelaUsuarioPromisseComponent},
                      ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
