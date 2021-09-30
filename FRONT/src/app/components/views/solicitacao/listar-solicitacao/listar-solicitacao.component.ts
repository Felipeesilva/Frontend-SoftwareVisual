import { Solicitacao } from '../../../../models/solicitacao';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { SolicitacaoService } from 'src/app/services/solicitacao.service';

@Component({
  selector: 'app-listar-solicitacao',
  templateUrl: './listar-solicitacao.component.html',
  styleUrls: ['./listar-solicitacao.component.css']
})
export class ListarSolicitacaoComponent implements OnInit {

  solicitacoes: Solicitacao[] = [];
  
  constructor(private service: SolicitacaoService, private router: Router) { }

  ngOnInit(): void {
    this.service.list().subscribe(solicitacoes => {
        this.solicitacoes = solicitacoes;  
        console.log(solicitacoes);
    });
  }

}
