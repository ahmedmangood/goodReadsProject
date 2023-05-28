import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  constructor(private http: HttpClient) { }
    
  getListUsers() {
        return this.http.get('http://localhost:4000/users');
      }
  getListBooks() {
        return this.http.get('http://localhost:4000/books');
      }
}
