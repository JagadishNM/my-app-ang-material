import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksArticlesComponent } from './books-articles.component';

const routes: Routes = [
  {path: '', component: BooksArticlesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksArticlesRoutingModule { }
