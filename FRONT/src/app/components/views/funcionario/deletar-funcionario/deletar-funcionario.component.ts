import { Router } from '@angular/router';
import { FuncionarioService } from 'src/app/services/funcionario.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deletar-funcionario',
  templateUrl: './deletar-funcionario.component.html',
  styleUrls: ['./deletar-funcionario.component.css']
})
export class DeletarFuncionarioComponent implements OnInit {
  funcionarios = ["nome", "matricula"];

  nome!: string;
  matricula!: string;
  
  constructor(private service: FuncionarioService, private router: Router) { }

  ngOnInit(): void { }

  deletar(nome: string):void{
    console.log(this.deletar);
    this.service.delete(nome).subscribe((nome) =>{
      console.log(nome);
      this.router.navigate(["funcionario/listar"]);
      this.ngOnInit
    });
   
  }

}
