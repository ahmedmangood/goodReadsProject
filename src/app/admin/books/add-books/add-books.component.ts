import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Data } from '@angular/router';
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
  description!: string;
  // publication_date: Date | any;
  selectedFile!: File;

  // Selected options
  authors: any;
  categories: any;

  showSuccessMessage: any = false;
  
  // from Validate
  addBookForm!: FormGroup;

  constructor(private http: HttpClient, private fb: FormBuilder, private dataService: GetDataService) {

    this.addBookForm = this.fb.group({
      title: [null, [Validators.required]], 
      authors: [null, [Validators.required]],
      category: [null, [Validators.required]], 
      description: [null, [Validators.required, Validators.minLength(5), Validators.maxLength(100)]]
    })
  }

  ngOnInit() {
    this.dataService.getListAuthor().subscribe(res => this.authors = res);
    
    this.dataService.getListCategory().subscribe(res => this.categories = res)
    // console.log(this.categories);
    
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
    formData.append("description", this.description)
    // formData.append("publication_date", this.publication_date)
    formData.append('image', this.selectedFile)

    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json')
    console.log(headers);
    
    this.dataService.addBook(formData, headers).subscribe((resultData: any) => { 
      console.log(resultData);
    this.showSuccessMessage = true;
  })
  }

}
