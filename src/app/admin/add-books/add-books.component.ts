import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Data } from '@angular/router';

@Component({
  selector: 'app-add-books',
  templateUrl: './add-books.component.html',
  styleUrls: ['./add-books.component.css']
})
export class AddBooksComponent {

  title!: string;
  authors!: string;
  category!: string;
  description!: string;
  // publication_date: Date | any;
  selectedFile!: File;
  showSuccessMessage: any = false;
  
  // from Validate
  addBookForm!: FormGroup;

  constructor(private http: HttpClient, private fb: FormBuilder) {

    this.addBookForm = this.fb.group({
      title: [null, [Validators.required]], 
      authors: [null, [Validators.required]],
      category: [null, [Validators.required]], 
      description: [null, [Validators.required, Validators.minLength(5), Validators.maxLength(100)]]
    })
  }

  get registerForm() {
    return this.addBookForm.controls;
  }

  onFileSelect(event: any) {
    this.selectedFile = event.target.files[0];
  }

  onSubmit() {
    const formData = new FormData();
    formData.append("title", this.title)
    formData.append("authors", this.authors)
    formData.append("category", this.category)
    formData.append("description", this.description)
    // formData.append("publication_date", this.publication_date)
    formData.append('image', this.selectedFile)

    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json')

    this.http.post(`http://localhost:4000/books`, formData, { headers: headers }).subscribe((resultData: any) => { 
      
    this.showSuccessMessage = true;
  })
  }

}
