import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { BooksArticleService } from './books-article.service';

@Component({
  selector: 'app-books-articles',
  templateUrl: './books-articles.component.html',
  styleUrls: ['./books-articles.component.css'],
  providers: [BooksArticleService]
})
export class BooksArticlesComponent implements OnInit {

  showData$:any;
  subjectKeyUp = new Subject<any>();
  obs$:any;
  constructor(private booksArticleService:BooksArticleService) { }

  ngOnInit() {
    this.subjectKeyUp.pipe(debounceTime(1000),distinctUntilChanged()).subscribe(
      x => {
        this.getArticles(x)
      }
    )
  }


  onSearch(event:any){
    const value = event.target.value;
    this.subjectKeyUp.next(value);
  }

  getArticles(value:string){
    this.showData$ = this.booksArticleService.getArticles(value);
    
  }

}
