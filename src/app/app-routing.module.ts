import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValorComponent } from './valor/valor.component';
import { TelaPrincipalComponent } from './tela-principal/tela-principal.component';
import { CadastroUsuariosComponent } from './cadastro-usuarios/cadastro-usuarios.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [{path: 'principal', component: ValorComponent},
                        {path: 'telaprincipal', component: TelaPrincipalComponent},
                        {path: 'principal/:info', component: ValorComponent},
                        {path: 'cadastrousuario', component: CadastroUsuariosComponent},
                        {path: '', component: LoginComponent}
                        
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
