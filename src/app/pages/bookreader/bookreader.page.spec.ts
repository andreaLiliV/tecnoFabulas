import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BookreaderPage } from './bookreader.page';

describe('BookreaderPage', () => {
  let component: BookreaderPage;
  let fixture: ComponentFixture<BookreaderPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BookreaderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
