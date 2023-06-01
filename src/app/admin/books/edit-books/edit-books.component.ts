import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetDataService } from 'src/app/services/get-data.service';

@Component({
  selector: 'app-edit-books',
  templateUrl: './edit-books.component.html',
  styleUrls: ['./edit-books.component.css']
})
export class EditBooksComponent {
  book: any;
  successMsg = false;

  constructor(private route: ActivatedRoute, private bookService: GetDataService) {}

  ngOnInit() {
    console.log(this.route.snapshot);
    const id = this.route.snapshot.paramMap.get('id');
    this.bookService.getBookByid(id).subscribe(res => this.book = res)
    
  }
  onSubmit() {
    this.bookService.updateBook(this.book).subscribe(updateBook => {
      this.book = updateBook;
      this.successMsg = true;
    })
  }

}
