import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './register/login/login.component';
import { ListBooksComponent } from './list-books/list-books/list-books.component';
import { SignupComponent } from './register/signup/signup.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { AddBooksComponent } from './admin/add-books/add-books.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  {
    path: "",
    component: HomepageComponent
  },
  {
    path: "home",
    component: ListBooksComponent
  },
  {
    path: "signup",
    component: SignupComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "admin/login",
    component:  AdminLoginComponent
  },
  {
    path: "admin/books",
    component:  AddBooksComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
