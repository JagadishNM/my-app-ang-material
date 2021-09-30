import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksArticlesComponent } from './books-articles.component';

describe('BooksArticlesComponent', () => {
  let component: BooksArticlesComponent;
  let fixture: ComponentFixture<BooksArticlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BooksArticlesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
