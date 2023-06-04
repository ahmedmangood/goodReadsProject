import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GetDataService } from 'src/app/services/get-data.service';

@Component({
  selector: 'app-add-books',
  templateUrl: './add-books.component.html',
  styleUrls: ['./add-books.component.css']
})
export class AddBooksComponent {


  title!: string;
  authorID!: string;
  categoryID!: string;
  selectedFile!: File;

  // Selected options
  authors: any;
  categories: any;

  showSuccessMessage: any = false;
  
  // from Validate
  addBookForm!: FormGroup;

  constructor(private router: Router, private fb: FormBuilder, private dataService: GetDataService) {

    this.addBookForm = this.fb.group({
      title: [null, [Validators.required]], 
      authors: [null, [Validators.required]],
      category: [null, [Validators.required]]
    })
  }

  ngOnInit() {
    this.dataService.getListAuthor().subscribe(res => this.authors = res);
    
    this.dataService.getListCategory().subscribe(res => this.categories = res)
    
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
    formData.append("authorID", this.authorID.toString())
    formData.append("categoryID", this.categoryID.toString())
    formData.append('image', this.selectedFile)
    const token = localStorage.getItem('token')
    let headers = new HttpHeaders();
    headers.set('Authorization', `Bearer ${token}`)
    headers.set('Content-Type', 'multipart/form-data');
    headers.set('Accept', 'application/json')
    
    this.dataService.addBooks(formData, {headers}).subscribe((resultData: any) => { 
    
      this.showSuccessMessage = true;
      setTimeout(() => {
        this.router.navigate(['/admin/books']);
      }, 3000);
  })
  }


}
