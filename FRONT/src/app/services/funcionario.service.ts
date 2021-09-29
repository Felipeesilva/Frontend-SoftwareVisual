import { Injectable } from '@angular/core';
import { Funcionario } from '../models/funcionario';
import { HttpClient } from "@Angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {
  deletarFuncionario(nome: string) {
    throw new Error('Method not implemented.');
  }

  private baseUrl = "http://localhost:5000/api/funcionario";

  constructor(private http: HttpClient) { }

  list(): Observable<Funcionario[]> {
    return this.http.get<Funcionario[]>(`${this.baseUrl}/list `);
  }

  create(funcionario: Funcionario): Observable<Funcionario> {
    return this.http.post<Funcionario>(`${this.baseUrl}/create`, funcionario);
  }

  delete(nome: string): Observable<Funcionario> {
    return this.http.delete<Funcionario>(`${this.baseUrl}/delete/${nome}`);
  }
}
