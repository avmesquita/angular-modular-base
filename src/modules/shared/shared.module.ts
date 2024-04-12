import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PrimeNgModule } from './modules/primeng.module';

import { CarouselComponent } from './components/carousel/carousel.component';

@NgModule({
  declarations: [
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,    
    PrimeNgModule,
    
  ],
  exports: [
    CarouselComponent
  ],
  providers: []  
})
export class SharedModule { }
