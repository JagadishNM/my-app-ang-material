import { TestBed } from '@angular/core/testing';

import { BooksArticleService } from './books-article.service';

describe('BooksArticleService', () => {
  let service: BooksArticleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BooksArticleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
