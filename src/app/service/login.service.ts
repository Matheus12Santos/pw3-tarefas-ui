import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// 2 – Interface da resposta com o token
interface LoginResponse {
  token: string;
}

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  // 3 – Variáveis para a lógica de autenticação
  private apiUrl = 'http://localhost:8080';
  private http = inject(HttpClient);

  constructor() { }

  // 4 e 5 – Função autenticar() que envia o POST com username e password
  autenticar(username: string, password: string): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.apiUrl}/login`, { username, password });
  }
}