import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'parent', loadChildren:() => import('./parent/parent.module').then(m => m.ParentModule) },
  {path:'asyncPipe', loadChildren:() => import('./async-pipe/async.module').then(m => m.AsyncModule) },
  {path:'articles', loadChildren:() => import('./books-articles/books-articles.module').then(m => m.BooksArticlesModule) },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
