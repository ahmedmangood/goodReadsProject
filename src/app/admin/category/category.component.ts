import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GetDataService } from 'src/app/services/get-data.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {

  categories!: any;
  deleteMsg = false;
  constructor(private getData: GetDataService, private router: Router) {}

  ngOnInit() {
    this.getData.getListCategory().subscribe((res: any) => this.categories = res)
 
  }
 
  editCategory(id: any) {
    this.router.navigate([`admin/category/edit/${id}`])
  }

  deleteCategory(id: any) {
    this.getData.deleteCategoryById(id).subscribe(() => {
      this.categories = this.categories?.filter((category: any) => category._id != id)
    })
    this.deleteMsg = true;
    setTimeout(() => {
      location.reload();
    }, 3000);
  }
}
