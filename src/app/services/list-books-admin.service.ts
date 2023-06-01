import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListBooksAdminService {
  private booksArr = new BehaviorSubject([]);

  booksList = this.booksArr.asObservable()

  constructor() { }

  getListBooks(arrVal: any) {
    return this.booksArr.next(arrVal);
  }

  afterRemove(data: any) {
    return this.booksArr.next(data);
  }
}
