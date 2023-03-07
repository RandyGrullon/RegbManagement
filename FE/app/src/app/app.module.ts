import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MaterialExampleModule } from "../../material.module";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const appRToutes: Routes = [{ path: 'login', component: LoginComponent }];

@NgModule({
  declarations: [AppComponent, LoginComponent, RegisterComponent, HomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRToutes),
    MaterialExampleModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
