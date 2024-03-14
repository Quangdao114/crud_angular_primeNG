import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { FormsModule, NgModel } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CrudPart2Component } from './crud-part2/crud-part2.component';
import { CrudServiceService } from './service/crud-service.service';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
@NgModule({
  declarations: [
    AppComponent,
    CrudPart2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,
    HttpClientModule,  // tu them
    ButtonModule, TableModule, InputTextModule
  ],
  providers: [FormsModule, CrudServiceService,HttpClient],     //CrudServiceService, FormMoudle tu them
  bootstrap: [AppComponent]
})
export class AppModule { }
