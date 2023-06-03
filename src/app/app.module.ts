import { NgModule, Provider } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ListUsersComponent } from './list-users/list-users.component';
import { SignupComponent } from './register/signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './register/login/login.component';
import { ListBooksComponent } from './list-books/list-books/list-books.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CardsComponent } from './list-books/cards/cards.component';
import { AddBooksComponent } from './admin/books/add-books/add-books.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ExploreComponent } from './explore/explore.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BookPageComponent } from './book-page/book-page.component';
import { MatIconModule } from '@angular/material/icon';
import { BooksDetailsComponent } from './books-details/books-details.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ContentAreaComponent } from './admin/dashboard/content-area/content-area.component';
import { BooksComponent } from './admin/books/books.component';
import { EditBooksComponent } from './admin/books/edit-books/edit-books.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthService } from './services/auth.service';
import { authAdminGuard } from './guards/auth-admin.guard';
import { CategoryComponent } from './admin/category/category.component';
import { AddcategoryComponent } from './admin/category/addcategory/addcategory.component';
import { EidtcategoryComponent } from './admin/category/eidtcategory/eidtcategory.component';
import { AuthorsComponent } from './admin/authors/authors.component';
import { AddAuthorsComponent } from './admin/authors/add-authors/add-authors.component';
import { EditAuthorsComponent } from './admin/authors/edit-authors/edit-authors.component';
import { SidebarAdminComponent } from './admin/dashboard/sidebar-admin/sidebar-admin.component';
import { AuthorDetailsComponent } from './author-details/author-details.component';
import { BookCardComponent } from './book-card/book-card.component';

@NgModule({
  declarations: [
    AppComponent,
    ListUsersComponent,
    SignupComponent,
    LoginComponent,
    ListBooksComponent,
    NavbarComponent,
    CardsComponent,
    AddBooksComponent,
    AdminLoginComponent,
    HomepageComponent,
    ExploreComponent,
    SidebarComponent,
    BookPageComponent,
    BooksDetailsComponent,
    DashboardComponent,
    SidebarComponent,
    ContentAreaComponent,
    BooksComponent,
    EditBooksComponent,
    NotFoundComponent,
    CategoryComponent,
    AddcategoryComponent,
    EidtcategoryComponent,
    AuthorsComponent,
    AddAuthorsComponent,
    EditAuthorsComponent,
    SidebarAdminComponent,
    AuthorDetailsComponent,
    BookCardComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatIconModule
  ],
  providers: [AuthService, authAdminGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
