import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-author-cards',
  templateUrl: './author-cards.component.html',
  styleUrls: ['./author-cards.component.css']
})
export class AuthorCardsComponent {
  @Input() author!: any;

  constructor(private router: Router) { }

  showDetails(id: any) {
    this.router.navigate([`details/${id}`]);
    console.log(this.router.navigate([`details/${id}`]));
  }
}
