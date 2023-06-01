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
  getBookByid(id: any) {
      return this.http.get(`http://localhost:4000/books/${id}`);
  }
  updateBook(book: any) {
    const url = `http://localhost:4000/books/${book.id}`;
    return this.http.put(url, book);
  }
}
