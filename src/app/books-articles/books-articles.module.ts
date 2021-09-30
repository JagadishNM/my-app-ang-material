import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksArticlesRoutingModule } from './books-articles-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BooksArticlesComponent } from './books-articles.component';


@NgModule({
  declarations: [BooksArticlesComponent],
  imports: [
    CommonModule,
    BooksArticlesRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class BooksArticlesModule { }
