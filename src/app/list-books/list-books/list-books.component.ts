import { Component } from '@angular/core';
import { GetDataService } from 'src/app/services/get-data.service';

@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.css']
})
export class ListBooksComponent {
  books!: any;
  constructor(private getData: GetDataService) {}

  ngOnInit() {
    this.getData.getListBooks().subscribe((res: any) => this.books = res)
  }
}
