import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list-component';
import { FormsModule } from '@angular/forms';
import { PipeModule } from '../pipe/pipe.module';


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
      

  ],
  imports: [
    BrowserModule,
    FormsModule,
    PipeModule

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
