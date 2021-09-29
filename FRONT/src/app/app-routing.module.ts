import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarFuncionarioComponent } from './components/views/funcionario/cadastrar-funcionario/cadastrar-funcionario.component';
import { DeletarFuncionarioComponent } from './components/views/funcionario/deletar-funcionario/deletar-funcionario.component';
import { ListarFuncionarioComponent } from './components/views/funcionario/listar-funcionario/listar-funcionario.component';

const routes: Routes = [
  
  // Rotas do Funcionario
  {
    // Home
    path: "",
    component: ListarFuncionarioComponent
  },
  {
    // Rota para Listar os Funcionarios
    path: "funcionario/listar",
    component: ListarFuncionarioComponent
  },
  {
    // Rota para cadastrar o Funcionario
    path: "funcionario/cadastrar",
    component: CadastrarFuncionarioComponent
  },
  {
    // Rota para deletar o Funcionario
    path: "funcionario/deletar",
    component: DeletarFuncionarioComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
