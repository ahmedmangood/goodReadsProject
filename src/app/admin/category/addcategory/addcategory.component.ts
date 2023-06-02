import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.css']
})
export class AddcategoryComponent {

  name!: string;
  showSuccessMessage= false;
  addCatForm: FormGroup;
 
  constructor(private http: HttpClient ,private fb: FormBuilder) {
    this.addCatForm = this.fb.group({
      name: [null, [Validators.required]], 
   
    })
   }
   get categoryForm() {
    return this.addCatForm.controls;
  }


  onSubmit() {
    const formData = new FormData();
    formData.append("name", this.name)
  
   

    // const headers = new HttpHeaders();
    // headers.append('Content-Type', 'multipart/form-data');
    // headers.append('Accept', 'application/json')

    this.http.post(`http://localhost:33400/category`, formData).subscribe((resultData: any) => { 
      
    this.showSuccessMessage = true;
  })
  }
}
