import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { ValorComponent } from './valor/valor.component';
import { FormsModule } from '@angular/forms';
import { NgxMaskDirective } from 'ngx-mask';
import { NgxMaskPipe } from 'ngx-mask';
import { provideNgxMask } from 'ngx-mask';
import { SaldoComponent } from './saldo/saldo.component';
import { BalanceComponent } from './balance/balance.component';
import { TelaPrincipalComponent } from './tela-principal/tela-principal.component';
import { CadastroUsuariosComponent } from './cadastro-usuarios/cadastro-usuarios.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    ValorComponent,
    SaldoComponent,
    BalanceComponent,
    TelaPrincipalComponent,
    CadastroUsuariosComponent,
    LoginComponent,    
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
  bootstrap: [AppComponent,]
})
export class AppModule { }
