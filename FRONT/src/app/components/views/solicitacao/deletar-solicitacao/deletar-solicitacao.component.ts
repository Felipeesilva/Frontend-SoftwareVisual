import { Router } from '@angular/router';
import { SolicitacaoService } from 'src/app/services/solicitacao.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deletar-solicitacao',
  templateUrl: './deletar-solicitacao.component.html',
  styleUrls: ['./deletar-solicitacao.component.css']
})
export class DeletarSolicitacaoComponent implements OnInit {
  solicitacoes = ["destino", "dataPartida", "dataPartida", "dataRetorno"];

  id!: number;
  destino!: string;
  dataPartida!: string;
  dataRetorno!: string;
  finalidade!: string;
  
  constructor(private service: SolicitacaoService, private router: Router) { }

  ngOnInit(): void { }

  deletar(id: number):void{
    console.log(this.deletar);
    this.service.delete(id).subscribe((id) =>{
      console.log(id);
      this.router.navigate(["solicitacao/listar"]);
      this.ngOnInit
    });
  }

}
