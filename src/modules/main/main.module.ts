import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MainRoutingModule } from './main-routing.module';

import { MainComponent } from './components/main/main.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrimeNgModule } from '../shared/modules/primeng.module';
import { SharedModule } from '../shared/shared.module';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';

@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent,
    HomeComponent,
    NotFoundComponent,
    ContactComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    MainRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    PrimeNgModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class MainModule { }
