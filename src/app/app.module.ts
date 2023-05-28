import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ListUsersComponent } from './list-users/list-users.component';
import { SignupComponent } from './register/signup/signup.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './register/login/login.component';
import { ListBooksComponent } from './list-books/list-books/list-books.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CardsComponent } from './list-books/cards/cards.component';

@NgModule({
  declarations: [
    AppComponent,
    ListUsersComponent,
    SignupComponent,
    LoginComponent,
    ListBooksComponent,
    NavbarComponent,
    CardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
