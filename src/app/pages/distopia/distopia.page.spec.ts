import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DistopiaPage } from './distopia.page';

describe('DistopiaPage', () => {
  let component: DistopiaPage;
  let fixture: ComponentFixture<DistopiaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DistopiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
