import { Component } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { EMPTY, isEmpty } from 'rxjs';
import { GetDataService } from 'src/app/services/get-data.service';

@Component({
  selector: 'app-category-collection',
  templateUrl: './category-collection.component.html',
  styleUrls: ['./category-collection.component.css']
})
export class CategoryCollectionComponent {
  books: any;
  id: any;
  emptyMsg = false
  constructor(private getBooks: GetDataService, private route: ActivatedRoute){}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getBooks.getListBooks().subscribe((res: any) => 
    {
      this.books = res.filter((data: any) => data.categoryID._id == this.id)
      if(this.books.length === 0) {
        this.emptyMsg = true;
      }
    })
  }
}
