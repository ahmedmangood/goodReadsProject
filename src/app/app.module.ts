import { NgModule } from '@angular/core';
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
import { AddBooksComponent } from './admin/add-books/add-books.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ExploreComponent } from './explore/explore.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BookPageComponent } from './book-page/book-page.component';
import { MatIconModule } from '@angular/material/icon';

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
    BookPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
