import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LoginComponent }  from './login.component';
import { AppComponent }  from './app.component';
import {InputTextModule} from 'primeng/primeng';
import {PasswordModule} from 'primeng/primeng';
import {ButtonModule} from 'primeng/primeng';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import {InputFormExample}  from './Save/input-form-example';
import {MenuIconsExample}  from './Menu/menu-icons-example';


@NgModule({
  imports:      [ BrowserModule,InputTextModule,PasswordModule,ButtonModule,FormsModule,CommonModule,BrowserAnimationsModule, MaterialModule,ReactiveFormsModule],
  declarations: [ AppComponent,LoginComponent,InputFormExample,MenuIconsExample],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
