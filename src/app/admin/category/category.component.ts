import { Component } from '@angular/core';
import { GetDataService } from 'src/app/services/get-data.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {

  categories!: any;
  // categoryone: any;
  constructor(private getData: GetDataService) {}

  ngOnInit() {
    this.getData.getListCategory().subscribe((res: any) => this.categories = res)
 
  }
 
}
