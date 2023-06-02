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
import { BooksDetailsComponent } from './books-details/books-details.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { SidebarComponent } from './admin/dashboard/sidebar/sidebar.component';
import { ContentAreaComponent } from './admin/dashboard/content-area/content-area.component';
import { BooksComponent } from './admin/books/books.component';
import { EditBooksComponent } from './admin/books/edit-books/edit-books.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthService } from './services/auth.service';
import { authAdminGuard } from './guards/auth-admin.guard';

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
    BooksDetailsComponent,
    DashboardComponent,
    SidebarComponent,
    ContentAreaComponent,
    BooksComponent,
    EditBooksComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [AuthService, authAdminGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
