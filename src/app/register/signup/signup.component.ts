import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  f_name!: string;
  l_name!: string;
  email!: string;
  password!: string;
  selectedFile!: File;
  showSuccessMessage: any = false;
  
  // from Validate
  signupForm!: FormGroup;

  constructor(private http: HttpClient, private fb: FormBuilder) {

    this.signupForm = this.fb.group({
      f_name: [null, [Validators.required]], 
      l_name: [null, [Validators.required]], 
      email: [null, [Validators.required, Validators.email]], 
      password: [null, [Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).*$/)]],
    })
  }

  get registerForm() {
    return this.signupForm.controls;
  }

  onFileSelect(event: any) {
    this.selectedFile = event.target.files[0];
  }

  onSubmit() {
    const formData = new FormData();
    formData.append("f_name", this.f_name)
    formData.append("l_name", this.l_name)
    formData.append("email", this.email)
    formData.append("password", this.password)
    formData.append('image', this.selectedFile)

    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json')

    this.http.post(`http://localhost:4000/register`, formData, { headers: headers }).subscribe((resultData: any) => { 
      
    this.showSuccessMessage = true;
  })
  }
}
