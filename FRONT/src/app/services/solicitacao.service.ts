import { Solicitacao } from './../models/solicitacao';
import { Injectable } from '@angular/core';
import { HttpClient } from "@Angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SolicitacaoService {
  deletarSolicitacao(id: string) {
    throw new Error('Method not implemented.');
  }

  private baseUrl = "http://localhost:5000/api/solicitacao";

  constructor(private http: HttpClient) { }

  list(): Observable<Solicitacao[]> {
    return this.http.get<Solicitacao[]>(`${this.baseUrl}/list `);
  }

  create(solicitacao: Solicitacao): Observable<Solicitacao> {
    return this.http.post<Solicitacao>(`${this.baseUrl}/create`, solicitacao);
  }

  delete(id: number): Observable<Solicitacao> {
    return this.http.delete<Solicitacao>(`${this.baseUrl}/delete/${id}`);
  }
  update(solicitacao: Solicitacao): Observable<Solicitacao> {
    return this.http.put<Solicitacao>(`${this.baseUrl}/update`, solicitacao);
  }
}
