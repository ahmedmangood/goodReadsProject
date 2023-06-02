import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GetDataService } from 'src/app/services/get-data.service';
import { ListBooksAdminService } from 'src/app/services/list-books-admin.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
  arrBooksList!: any;
  deleteMsg = false;
  constructor(private router: Router, private data: GetDataService) {}
  ngOnInit() {
    this.data.getListBooks().subscribe((res: any)=> this.arrBooksList = res);
  }

  editBook(id: any) {
    this.router.navigate([`admin/books/edit/${id}`])
  }
  deleteBook(id: any) {
    this.data.deleteBook(id).subscribe(() => {
      this.arrBooksList = this.arrBooksList?.filter((book:any) => book._id != id)
    })

    this.deleteMsg = true
  }
}
