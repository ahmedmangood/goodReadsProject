import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

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

  constructor(private http: HttpClient) {}

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

    this.http.post(`http://localhost:3000/register`, formData, { headers: headers }).subscribe((resultData: any) => {
      console.log(resultData);
      alert('register success');

    })
  }
}
