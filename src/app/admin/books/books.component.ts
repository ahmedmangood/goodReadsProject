import { Component } from '@angular/core';
import { GetDataService } from 'src/app/services/get-data.service';
import { ListBooksAdminService } from 'src/app/services/list-books-admin.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
  arrBooksList!: any;
  constructor(private books: ListBooksAdminService, private data: GetDataService) {}
  ngOnInit() {
    this.data.getListBooks().subscribe((res: any)=> this.arrBooksList = res);
  }
}
