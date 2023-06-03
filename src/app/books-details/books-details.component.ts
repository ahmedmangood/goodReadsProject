import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetDataService } from '../services/get-data.service';

@Component({
  selector: 'app-books-details',
  templateUrl: './books-details.component.html',
  styleUrls: ['./books-details.component.css']
})
export class BooksDetailsComponent {

  books!: any;

  singleBook!: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private getData: GetDataService
  ) {}

  ngOnInit() {
    this.getData
      .getBookByid(this.activatedRoute.snapshot.params["id"])
      .subscribe((res: any) => this.singleBook = res)
      console.log(this.singleBook);
      
  }
}
