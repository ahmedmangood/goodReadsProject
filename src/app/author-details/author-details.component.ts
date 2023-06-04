import { Component } from '@angular/core';
import { GetDataService } from '../services/get-data.service';

@Component({
  selector: 'app-author-details',
  templateUrl: './author-details.component.html',
  styleUrls: ['./author-details.component.css']
})
export class AuthorDetailsComponent {
  authors: any;
  constructor(private authorService: GetDataService){}

ngOnInit() {
  this.authorService.getListAuthor().subscribe(res => this.authors = res);
}

}
