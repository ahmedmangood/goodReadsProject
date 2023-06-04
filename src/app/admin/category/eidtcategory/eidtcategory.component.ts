import { HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GetDataService } from 'src/app/services/get-data.service';

@Component({
  selector: 'app-eidtcategory',
  templateUrl: './eidtcategory.component.html',
  styleUrls: ['./eidtcategory.component.css']
})
export class EidtcategoryComponent {

  oldName!: any;

  showSuccessMessage= false;

  editCatForm: FormGroup;

  id: any;
  
  constructor(private route: ActivatedRoute,
              private cateService: GetDataService,
              private fb: FormBuilder,
              private router: Router) {

    this.editCatForm = this.fb.group({
      name: [null, [Validators.required]]
    })


  }
  get editForm() {
    return this.editCatForm.controls;
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.cateService.getCategoryByid(this.id).subscribe( res => this.oldName = res)
  }
  onSubmit() {

    const token = localStorage.getItem('token');
    
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    
    headers.append('Content-Type', 'multipart/form-data');
    
    headers.append('Accept', 'application/json')
    
    const options = { headers }
      
    this.cateService.updateCategory({name: this.oldName.name}, this.id , options).subscribe(resultData => { 
      
        console.log(resultData);
      
      this.showSuccessMessage = true;
    // setTimeout(() => {
    //   this.router.navigate(['/admin/books']);
    // }, 3000);
    })
  }
}
