import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormBondComponent } from './form-bond/form-bond.component';
@NgModule({
  declarations: [
    AppComponent,
    FormBondComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
