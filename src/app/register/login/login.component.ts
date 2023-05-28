import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email!: string;
  password!: string;
  tocken: any;
  constructor(private loginService: LoginService, private router: Router) {}

  onSubmit() {
    this.loginService.login(this.email, this.password).subscribe((res: any) => {
          // Login successful, store token and redirect to home page
          localStorage.setItem('token', res.token);
          // Redirect to home page
          this.router.navigate(['/home'])
        }
      );
}
}