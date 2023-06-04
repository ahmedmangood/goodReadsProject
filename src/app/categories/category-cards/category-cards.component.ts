import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { GetDataService } from 'src/app/services/get-data.service';

@Component({
  selector: 'app-category-cards',
  templateUrl: './category-cards.component.html',
  styleUrls: ['./category-cards.component.css']
})
export class CategoryCardsComponent {
  @Input() oneCategory!: any;

  constructor(private router: Router) {}

  showDetails(id: any) {
    this.router.navigate([`categories/${id}`]);
    console.log(this.router.navigate([`categories/${id}`]));
  }
}
