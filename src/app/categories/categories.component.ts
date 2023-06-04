import { Component } from '@angular/core';
import { GetDataService } from '../services/get-data.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  categories!: any;
  constructor(private getData: GetDataService) { }

  ngOnInit() {
    this.getData.getListCategory().subscribe((res: any) => this.categories = res)
  }
}
