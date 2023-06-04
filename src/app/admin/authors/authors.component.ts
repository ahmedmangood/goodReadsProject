import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GetDataService } from 'src/app/services/get-data.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent {
  arrAuthorsList!: any;
  deleteMsg = false;
  constructor(private router: Router, private data: GetDataService) {}
  ngOnInit() {
    this.data.getListAuthor().subscribe((res: any)=> this.arrAuthorsList = res);
  }

  editAuthor(id: any) {
    this.router.navigate([`admin/authors/edit/${id}`])
  }
  deleteAuthor(id: any) {
    this.data.deleteAuthorById(id).subscribe(() => {
      this.arrAuthorsList = this.arrAuthorsList?.filter((author:any) => author.id != id)
    })

    this.deleteMsg = true;
    setTimeout(() => {
      location.reload();
    }, 3000);
  }
}
