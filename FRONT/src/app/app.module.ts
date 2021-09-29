import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from "@Angular/common/http";
import { FormsModule } from '@angular/forms';
// Imports dos componentes da aplicação
import { AppComponent } from './app.component';
import { ListarFuncionarioComponent } from './components/views/funcionario/listar-funcionario/listar-funcionario.component';
import { CadastrarFuncionarioComponent } from './components/views/funcionario/cadastrar-funcionario/cadastrar-funcionario.component';
import { DeletarFuncionarioComponent } from './components/views/funcionario/deletar-funcionario/deletar-funcionario.component';


@NgModule({
  declarations: [
    AppComponent,
    ListarFuncionarioComponent,
    CadastrarFuncionarioComponent,
    DeletarFuncionarioComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
