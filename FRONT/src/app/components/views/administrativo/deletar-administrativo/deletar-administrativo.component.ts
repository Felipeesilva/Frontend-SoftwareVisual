import { Router } from '@angular/router';
import { AdministrativoService } from 'src/app/services/administrativo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deletar-administrativo',
  templateUrl: './deletar-administrativo.component.html',
  styleUrls: ['./deletar-administrativo.component.css']
})
export class DeletarAdministrativoComponent implements OnInit {
  administrativos = ["responsavel", "matriculaAdm"];

  responsavel!: string;
  matriculaAdm!: string;
  
  constructor(private service: AdministrativoService, private router: Router) { }

  ngOnInit(): void { }

  deletar(responsavel: string):void{
    console.log(this.deletar);
    this.service.delete(responsavel).subscribe((responsavel) =>{
      console.log(responsavel);
      this.router.navigate(["administrativo/listar"]);
      this.ngOnInit
    }); 
  }

}
