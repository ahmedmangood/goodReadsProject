import { HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GetDataService } from 'src/app/services/get-data.service';

@Component({
  selector: 'app-edit-authors',
  templateUrl: './edit-authors.component.html',
  styleUrls: ['./edit-authors.component.css']
})
export class EditAuthorsComponent {
  author: any;
  successMsg = false;
  // validtion 

  editAuthorForm!: FormGroup;
  id: any;

  // newData: any;
  selectedFile!: File;
  
  constructor(private route: ActivatedRoute,
              private authorService: GetDataService,
              private fb: FormBuilder,
              private router: Router) {

    this.editAuthorForm = this.fb.group({
      firstName: [null, [Validators.required]], 
      lastName: [null, [Validators.required]],
      dateOfBirth: [null, [Validators.required]]
    })


  }
  get editForm() {
    return this.editAuthorForm.controls;
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length) {
      this.author.image = input.files[0];
    }
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.authorService.getAuthorById(this.id).subscribe( res => this.author = res)
  }
  onSubmit() {
    let newData = new FormData;
    newData.append("firstName", this.author.firstName)
    newData.append("lastName", this.author.lastName)
    newData.append("dateOfBirth", this.author.dateOfBirth.toString())
    if(this.author.image) {
      newData.append("authorPhoto", this.author.image, this.author.image.filename);
    }
    
    console.log(newData);
    
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json')

    this.authorService.updateAuthor(newData, this.id, headers).subscribe((val: any) => this.author = val)
    this.successMsg = true;
    // setTimeout(() => {
    //   this.router.navigate(['/admin/books']);
    // }, 3000);
  }
}
