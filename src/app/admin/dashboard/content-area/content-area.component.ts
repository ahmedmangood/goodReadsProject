import { Component } from '@angular/core';
import { GetDataService } from 'src/app/services/get-data.service';

@Component({
  selector: 'app-content-area',
  templateUrl: './content-area.component.html',
  styleUrls: ['./content-area.component.css']
})
export class ContentAreaComponent {

  booksData: any;
  categories: any;
  authors: any;

  constructor(private getData: GetDataService) {}
  ngOnInit() {
    this.getData.getListBooks().subscribe((res: any) => this.booksData = res.slice(-5));
    this.getData.getListAuthor().subscribe((res: any) => this.authors = res.slice(-5));
    this.getData.getListCategory().subscribe((res: any) => this.categories = res.slice(-5));
  }

}
