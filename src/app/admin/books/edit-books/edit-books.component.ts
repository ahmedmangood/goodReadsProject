import { HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GetDataService } from 'src/app/services/get-data.service';
// import { catchError } from 'rxjs';

@Component({
  selector: 'app-edit-books',
  templateUrl: './edit-books.component.html',
  styleUrls: ['./edit-books.component.css']
})
export class EditBooksComponent {
  book: any;
  successMsg = false;
  // validtion 

  editBookForm!: FormGroup;
  id: any;
  // newData: any;
  selectedFile!: File;
  constructor(private route: ActivatedRoute,
              private bookService: GetDataService,
              private fb: FormBuilder,
              private router: Router) {

    this.editBookForm = this.fb.group({
      title: [null, [Validators.required]], 
      authorID: [null, [Validators.required]],
      categoryID: [null, [Validators.required]]
    })


  }
  get editForm() {
    return this.editBookForm.controls;
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length) {
      this.book.image = input.files[0];
    }
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.bookService.getBookByid(this.id).subscribe( res => this.book = res)
  }
  onSubmit() {
    let newData = new FormData;
    newData.append("title", this.book.title)
    newData.append("authorID", this.book.authorID._id.toString())
    newData.append("categoryID", this.book.categoryID._id.toString())
    if(this.book.image) {
      newData.append("image", this.book.image, this.book.image.filename);
    }
    
    console.log(newData);
    
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json')

    this.bookService.updateBook(newData, this.id, headers).subscribe((val: any) => this.book = val)
    this.successMsg = true;
    setTimeout(() => {
      this.router.navigate(['/admin/books']);
    }, 3000);
  }
}
