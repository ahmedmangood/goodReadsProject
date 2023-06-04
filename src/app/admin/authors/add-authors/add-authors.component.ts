import { HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GetDataService } from 'src/app/services/get-data.service';

@Component({
  selector: 'app-add-authors',
  templateUrl: './add-authors.component.html',
  styleUrls: ['./add-authors.component.css']
})
export class AddAuthorsComponent {

  firstName!: string;
  lastName!: string;
  dateOfBirth!: string;
  
  selectedFile!: File;

  // Selected options
  authors: any;
  categories: any;

  showSuccessMessage: any = false;
  
  // from Validate
  addAuthorForm!: FormGroup;

  constructor(private router: Router, private fb: FormBuilder, private dataService: GetDataService) {

    this.addAuthorForm = this.fb.group({
      firstName: [null, [Validators.required]], 
      lastName: [null, [Validators.required]],
      dateOfBirth: [null, [Validators.required]],
      selectedFile: [null, [Validators.required]]
    })
  }

  get addAuthorsForm() {
    return this.addAuthorForm.controls;
  }

  onFileSelect(event: any) {
    this.selectedFile = event.target.files[0];
  }

  onSubmit() {
    const formData = new FormData();
    formData.append("firstName", this.firstName)
    formData.append("lastName", this.lastName)
    formData.append("dateOfBirth", this.dateOfBirth.toString())
    formData.append('authorPhoto', this.selectedFile)

    const headers = new HttpHeaders();
    
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json')

    console.log(headers);
    
    this.dataService.addAuthor(formData, headers).subscribe((resultData: any) => { 
      console.log(resultData);
      this.showSuccessMessage = true;
    setTimeout(() => {
      this.router.navigate(['/admin/authors']);
    }, 3000);
  })
  }
}
