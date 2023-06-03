import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GetDataService } from 'src/app/services/get-data.service';
import { catchError } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.css']
})
export class AddcategoryComponent {

  name!: string;
  showSuccessMessage= false;
  addCatForm: FormGroup;
 
  constructor(private router: Router ,private fb: FormBuilder, private postCategory: GetDataService) {
    this.addCatForm = this.fb.group({
      name: [null, [Validators.required]]}
      )
    }

   get categoryForm() {
    return this.addCatForm.controls;
  }

  onSubmit() {
    
    console.log(this.name);

    const token = localStorage.getItem('token');
    
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    
    headers.append('Content-Type', 'multipart/form-data');
    
    headers.append('Accept', 'application/json')
    
    const options = { headers }
      
    this.postCategory.addCategory({name: this.name}, options).subscribe(resultData => { 
      
        console.log(resultData);
      
      this.showSuccessMessage = true;

      setTimeout(() => {
        this.router.navigate(['/admin/categories']);
      }, 3000);
    })
  }
}