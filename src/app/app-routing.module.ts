import { AddcategoryComponent } from './admin/category/addcategory/addcategory.component';
import { CategoryComponent } from './admin/category/category.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './register/login/login.component';
import { ListBooksComponent } from './list-books/list-books/list-books.component';
import { SignupComponent } from './register/signup/signup.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { AddBooksComponent } from './admin/books/add-books/add-books.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ExploreComponent } from './explore/explore.component';
import { BookPageComponent } from './book-page/book-page.component';
import { BooksDetailsComponent } from './books-details/books-details.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { BooksComponent } from './admin/books/books.component';
import { EditBooksComponent } from './admin/books/edit-books/edit-books.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { authAdminGuard } from './guards/auth-admin.guard';
import { AuthorDetailsComponent } from './author-details/author-details.component';

const routes: Routes = [
  {
    path: "",
    component: HomepageComponent
  },
  {
    path: "explore",
    component: ExploreComponent
  },
  {
    path: "home",
    component: ListBooksComponent
  },
  {
    path: "book",
    component: BookPageComponent
  },
  {
    path: "list-books",
    component: ListBooksComponent
  },
  {
    path: "details/:id",
    component: BooksDetailsComponent
  },
  {
    path: "author",
    component: AuthorDetailsComponent
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
    path: "admin/login", component: AdminLoginComponent,
    // canActivate: [authAdminGuard]
  },
  {
    path: "admin/books",
    component: BooksComponent,
    // canActivate: [authAdminGuard]
  },
  {
    path: "admin/books/add",
    component: AddBooksComponent,
    // canActivate: [authAdminGuard]
  },
  {
    path: "admin/books/edit/:id",
    component: EditBooksComponent,
    // canActivate: [authAdminGuard]
  },
  {
    path: "admin/dashboard",
    component: DashboardComponent,
    // canActivate: [authAdminGuard]
  },
  {
    path: "admin/category",
    component: CategoryComponent,
    // canActivate: [authAdminGuard]
  },
  {
    path: "admin/category/add",
    component: AddcategoryComponent,
    // canActivate: [authAdminGuard]
  },
  
  {
    path: "**",
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
