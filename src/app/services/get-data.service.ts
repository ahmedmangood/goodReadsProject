import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  constructor(private http: HttpClient) { }

  getListUsers() {
        return this.http.get('http://localhost:4000/users');
      }
  getListAuthor() {
        return this.http.get('http://localhost:4000/author');
      }
  getListCategory() {
        return this.http.get('http://localhost:4000/category');
      }
  addCategory(body: any, options: {headers: HttpHeaders}): Observable<any>{
    return this.http.post('http://localhost:4000/category', body, options)
    .pipe(
      catchError((err) => {
        console.log('Error: ', err);
        return throwError(err);
      })
    )
  }
  getListBooks() {
    return this.http.get('http://localhost:4000/books');
  }
  getBookByid(id: any) {
    return this.http.get(`http://localhost:4000/books/${id}`);
  }
  addBook(body: any, headers: any) {
    return this.http.post(`http://localhost:4000/books`, body, {headers});
  }
  updateBook(book: any, id: any, headers: any) {
    return this.http.put(`http://localhost:4000/books/${id}`, book, {headers});
  }
  deleteBook(id: any) {
    return this.http.delete(`http://localhost:4000س/books/${id}`);
  }
}
