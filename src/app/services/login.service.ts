import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient) {}
  
  login(email: string, password: string) {
    const body = { email, password };
    return this.http.post('http://localhost:4000/login', body)
  }
}
