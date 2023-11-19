import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TelaLoginComponent } from './tela-login/tela-login.component';
import { TelaPrincipalComponent } from './tela-principal/tela-principal.component';
import { MenuComponent } from './menu/menu.component';
import { RodapeComponent } from './rodape/rodape.component';
import { FormsModule } from '@angular/forms';
import { NgxMaskPipe } from 'ngx-mask';
import { NgxMaskDirective } from 'ngx-mask';
import { provideNgxMask } from 'ngx-mask';
import { TelaCadastroComponent } from './tela-cadastro/tela-cadastro.component';
import { HttpClientModule} from '@angular/common/http';
import { TelaUsuarioObservableComponent } from './tela-usuario-observable/tela-usuario-observable.component';
import { TelaUsuarioPromisseComponent } from './tela-usuario-promisse/tela-usuario-promisse.component';


@NgModule({
  declarations: [
    AppComponent,
    TelaLoginComponent,
    TelaPrincipalComponent,
    MenuComponent,
    RodapeComponent,
    TelaCadastroComponent,
    TelaUsuarioObservableComponent,
    TelaUsuarioPromisseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxMaskDirective,
    NgxMaskPipe,
    HttpClientModule
  ],
  providers: [provideNgxMask(),],
  bootstrap: [AppComponent]
})
export class AppModule { }
