import { Solicitacao } from 'src/app/models/solicitacao';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SolicitacaoService } from 'src/app/services/solicitacao.service';

@Component({
  selector: 'app-cadastrar-solicitacao',
  templateUrl: './cadastrar-solicitacao.component.html',
  styleUrls: ['./cadastrar-solicitacao.component.css']
})
export class CadastrarSolicitacaoComponent implements OnInit {

  id!: number;
  destino!: string;
  dataPartida!: string;
  dataRetorno!: string;
  finalidade!: string;
  funcionarioid!: number;


  constructor(private router: Router, private service: SolicitacaoService) { }

  ngOnInit(): void {}

  cadastrar(): void {
    let solicitacao: Solicitacao = {

      destino: this.destino,
      dataPartida: this.dataPartida,
      dataRetorno: this.dataRetorno,
      finalidade: this.finalidade,
      funcionarioid: this.funcionarioid
    };
    this.service.create(solicitacao).subscribe((solicitacao) => {
      console.log(solicitacao);
      this.router.navigate(["solicitacao/listar"]);
    });
  }
}
