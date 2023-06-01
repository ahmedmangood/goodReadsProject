import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  @Input() singleBook!: any;

  constructor(private router: Router) {}

  showDetails(id: any) {
    this.router.navigate([`details/${id}`]);
    console.log(this.router.navigate([`details/${id}`]));
  }
}
